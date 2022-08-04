// const { effect, reactive } = Reactive();

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
}

function effect(fn, options = {}) {
  const _effect = new EffectActive(fn, options.scheduler);
  _effect.run();
  const runner = _effect.run.bind(_effect);
  runner.effect = _effect;
  return runner;
}
