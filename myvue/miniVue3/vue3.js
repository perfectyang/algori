function isFunction(ob) {
  return typeof ob === "function";
}

function isObject(ob) {
  return typeof ob === "object" && ob !== "null";
}

let activeEffect = null;
const targetWeakMap = new WeakMap();

const IS_REACTIVE = "IS_REACTIVE";
const proxyMap = new WeakMap();

function reactive(obj) {
  if (obj[IS_REACTIVE]) {
    return obj;
  }
  if (proxyMap.has(obj)) {
    return proxyMap.get(obj);
  }

  const proxy = new Proxy(obj, {
    get(target, key, receiver) {
      if (key === IS_REACTIVE) {
        return true;
      }
      track(target, key);
      return Reflect.get(target, key, receiver);
    },

    set(target, key, value, receiver) {
      const oldValue = target[key];
      const result = Reflect.set(target, key, value, receiver);
      if (oldValue !== value) {
        trigger(target, key, value);
      }
      return result;
    },
  });
  proxyMap.set(obj, proxy);
  return proxy;
}

class EffectActive {
  constructor(fn, scheduler) {
    this.fn = fn;
    this.parent = null;
    this.deps = [];
    this.scheduler = scheduler;
    this.active = true;
  }

  run() {
    try {
      this.parent = activeEffect;
      activeEffect = this;
      clearupEffect(this);
      return this.fn();
    } finally {
      activeEffect = this.parent;
    }
  }

  stop() {
    if (this.active) {
      this.active = false;
      clearupEffect(this);
    }
  }
}

function clearupEffect(effect) {
  const { deps } = effect;
  deps.forEach((dep) => {
    dep.clear();
  });
  effect.deps = [];
}

function track(target, key) {
  let depsMap = targetWeakMap.get(target, key);
  if (!depsMap) {
    targetWeakMap.set(target, (depsMap = new Map()));
  }
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, (dep = new Set()));
  }
  trackEffects(dep);
}

function trackEffects(dep) {
  const shouldTrack = !dep.has(activeEffect);
  if (shouldTrack) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
  }
}

function trigger(target, key, value) {
  const depsMap = targetWeakMap.get(target);
  if (!depsMap) return;
  let effects = depsMap.get(key);
  if (effects) {
    triggerEffects(effects);
  }
}

function triggerEffects(effects) {
  effects = new Set(effects);
  effects.forEach((effect) => {
    if (effect !== activeEffect) {
      if (effect.scheduler) {
        effect.scheduler();
      } else {
        effect.run();
      }
    }
  });
}

function effect(fn, options = {}) {
  const _effect = new EffectActive(fn, options.scheduler);
  _effect.run();
  const runner = _effect.run.bind(_effect);
  runner.effect = _effect;
  return runner;
}

class ComputedRef {
  constructor(getter, setter) {
    this._value = null;
    this._dirty = true;
    this.setter = setter;
    this.deps = new Set([]);
    this.effect = new EffectActive(getter, () => {
      if (!this._dirty) {
        this._dirty = true;
        triggerEffects(this.deps);
      }
    });
  }

  get value() {
    trackEffects(this.deps);
    if (this._dirty) {
      this._dirty = false;
      this._value = this.effect.run();
    }
    return this._value;
  }

  set value(value) {
    this.setter(value);
  }
}

function computed(getterOrOptions) {
  let getter;
  let setter;
  if (isFunction(getterOrOptions)) {
    getter = getterOrOptions;
    setter = () => {
      console.warn("no setter");
    };
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  return new ComputedRef(getter, setter);
}
