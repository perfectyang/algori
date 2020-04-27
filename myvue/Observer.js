function Vue (options) {
  this.__init(options)
}

initMixin(Vue)

function initMixin (Vue) {
  Vue.prototype.__init = function (options) {
    this.$options = options
    var vm = this
    if (this.$options.data) {
      initDatas(vm)
    }
  }
}

function initDatas (vm) {
  const datas = typeof vm.$options.data === 'function' ? vm.$options.data.call(vm) : data
  vm.__data = datas
  observe(datas)
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}
function isArray (value) {
  return Array.isArray(value)
}

function observe (datas) {
  if (!isObject(datas)) {
    console.log('datas', datas)
    return
  }
  const ob = new Observer(datas)
  return ob
}

function def (obj, key, value) {
  Object.defineProperty(obj, key, {
    value: value,
    enumerable: false,
    writable: true,
    configurable: true
  })
}

class Observer {
  constructor (value) {
    console.log(value, Array.isArray(value))
    def(value, '__ob__', this)
   if (Array.isArray(value)) {
      value.__proto__ = methodsProto
      this.observeArray(value)
    } else { // 是对象
      this.walk(value)
    }
  }

  walk (obj) {
    const keys = Object.keys(obj)
    keys.forEach(key => {
      defineReactive(obj, key)
    })
  }

  observeArray (value) {
    value.forEach(cur => {
      observe(cur)
    })
  }

}

function defineReactive(obj, key) {
  let value = obj[key]
  observe(value)
  Object.defineProperty(obj, key, {
    get () {
      return value
    },
    set (newValue) {
      if (newValue === value) return
      console.log('值变化了吗')
      observe(newValue)
      value = newValue
    }
  })
}

