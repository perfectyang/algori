

const oldArrayProto = Array.prototype
const methodsProto = Object.create(oldArrayProto)

const methods = [
  'push',
  'shift',
  'unshift',
  'pop',
  'reverse',
  'splice',
  'sort'
]

methods.forEach(method => {
  methodsProto[method] = function (...args) {
    const result = oldArrayProto[method].apply(this, args)
    console.log('截数组方法')
    const ob = this.__ob__
    let inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break;
      case 'splice':
        inserted = args.slice(2)
        break
    }
    if (inserted) ob.observeArray(inserted)
    return result
  }
})