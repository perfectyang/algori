// LRU 缓存算法，最近使用
// () 正在使用的，[] 失效，容量为 4
// (1) 1
// (2) 2 1
// (4) 4 2 1
// (5) 5 4 2 1
// (6) 6 5 4 2 [1]
// (5) 5 6 4 2
const {DoubleLinked, Node} = require('./doubledLink')
class LRU {
  constructor (opacity = 4) {
    this.opacity = opacity
    this.map = {}
    this.doubleLink = new DoubleLinked()
  }

  size () {
    return Object.keys(this.map).length
  }

  get (key) {
    if (!(key in this.map)) return -1
    const node = this.map[key]
    this.doubleLink.remove(node)
    this.doubleLink.appendFront(node)
    return node.value
  }

  put (key, value) {
    if (key in this.map) { // key 存在容量列表中
      const originNode = this.map[key]
      this.doubleLink.remove(originNode)
      originNode.value = value
      this.doubleLink.appendFront(originNode)
    } else { // 不存在容量列表中
      if (this.size() >= this.opacity) { // 缓存容量满了
        const lastNode = this.doubleLink.remove()
        delete this.map[lastNode.key]
      }
      const node = new Node(key, value)
      this.doubleLink.appendFront(node)
      this.map[key] = node
    }
  }

  print () {
    return this.doubleLink.print()
  }

}

const l = new LRU(5)
l.put(1, 1) // (1) 1
l.put(2, 2) // (2) 2 1
l.put(3, 3) // (3) 3 2 1
l.put(4, 4) // (4) 4 3 2 1
l.put(5, 5) // (5) 5 4 3 2 [1]
l.print()
l.get(2)  // (2) 2 5 4 3
l.print()