class Node {
  constructor (key, value) {
    this.key = key
    this.value = value
    this.prev = null
    this.next = null
  }
}

//  []     [] => [] => []
//  []  =>  [] => [] => []

class DoubleLinked {
  constructor () {
    this.head = null
    this.tail = null
    this.size = 0
  }

  appendFront (node) {
    if (!this.head) {
      this.head = node
      this.tail = node
      this.head.prev = null
      this.head.next = null
    } else {
      node.next = this.head
      this.head.prev = node
      this.head = node
      this.head.prev = null
    }
    this.size += 1
  }

  appendTail (node) {
    if (!this.tail) {
      this.head = node
      this.tail = node
      this.tail.next = null
      this.tail.prev = null
    } else {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
      this.tail.next = null
    }
    this.size += 1
  }


  __removeFront () {
    if (!this.head) return -1
    const node = this.head
    if (node.next) {
      this.head = node.next
      this.head.prev = null
    } else { // 只有一个节点
      this.head = this.tail = null
    }
    return node
  }

  __removeTail () {
    if (!this.tail) return -1
    const node = this.tail
    if (node.prev) { // 有上一个节点
      this.tail = node.prev
      this.tail.next = null
    } else { // 只有一个节点
      this.head = this.tail = null
    }
    return node
  }


  remove (node) {
    if (!node) {
      return this.__removeTail()
    } else {
      if (node === this.head) {
        this.__removeFront()
      } else if (node === this.tail) {
        this.__removeTail()
      } else {
        //  []  =>  [] => [] => []
        node.prev.next = node.next
        node.next.prev = node.prev
        this.size -= 1
      }
    }
  }

  pophead () {
    return this.__removeFront()
  }
  popTail () {
    return this.__removeTail()
  }

  print () {
    let node = this.head
    let arr = []
    while (node) {
      arr.push(`{${node.key}, ${node.value}}`)
      node = node.next
    }
    console.log(arr.join('=>'))
  }

}

const l = new DoubleLinked()
const nodes = []
for (let i = 0; i < 10; i++) {
  nodes.push(new Node(i + 1, i + 1))
}
l.appendFront(nodes[0])
l.print()
l.appendFront(nodes[1])
l.print()
l.appendFront(nodes[2])
l.print()
l.appendFront(nodes[3])
l.print()
l.appendTail(nodes[4])
l.print()
l.appendTail(nodes[5])
l.print()
l.appendTail(nodes[6])
l.print()
l.remove(nodes[6])
l.print()
const delNode = l.remove()
console.log('delNode', delNode)
l.print()
// console.log(nodes[0] === nodes[0])
// l.print()
// l.appendFront(new Node(2, 2))
// l.print()
// l.appendFront(new Node(3, 3))
// l.print()
console.log(l.pophead())
console.log(l.popTail())
l.print()