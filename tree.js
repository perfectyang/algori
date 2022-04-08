class Node {
  constructor (key, value) {
    this.key = key
    this.value = value
    this.left = null
    this.right = null
  }
}

class Tree {
  constructor () {
    this.root = null
    this.size = 0
  }

  insert (key, value) {
    const newNode = new Node(key, value)
    if (this.size === 0) { // 没有根节点
      this.root = newNode
      this.size += 1
    } else {
      let node = this.root
      let parent
      while (node) {
        if (node.key === key) {
          node.value = value
          return
        } else {
          parent = node
          if (key > node.key) {
            node = node.right
          } else if (key < node.key) {
            node = node.left
          }
        }
      }
      if (key > parent.key) {
        parent.right = newNode
      } else {
        parent.left = newNode
      }
      this.size += 1
    }
  }

  get (key) {
    if (!this.root) return -1
    let current = this.root
    while (current.key !== key) {
      if (key > current.key) {
        current = current.right
      } else {
        current = current.left
      }
      if (current === null) {
        return -1
      }
    }
    return current
  }

  binarySearch (cb) {
    if (!this.root) return -1
    this.binarySearchNode(this.root, cb)
  }

  binarySearchNode (node, cb) {
    cb(node)
    node.left && this.binarySearchNode(node.left, cb)
    node.right && this.binarySearchNode(node.right, cb)
  }

  remove (key) {
    if (!this.root) return -1
    // 先找到要删除的节点
    let current = this.root
    let parent = null
    let isLeft = true

    while (current.key !== key) {
      parent = current
      if (key > current.key) {
        isLeft = false
        current = current.right
      } else if (key < current.key) {
        isLeft = true
        current = current.left
      }
      if (current === null) {
        return -1
      }
    }

    if (current.left === null && current.right === null) { 
      // 1. 叶子节点
      if (parent === null) {
        this.root = null
      } else {
        if (isLeft) {
          parent.left = null
        } else {
          parent.right = null
        }
      }
    } else if (current.left !== null && current.right !== null) {
      // 有两个叶子节点
      const successor = this.getSuccessor(current) // 找到后继节点
      if (isLeft) {
        parent.left = successor
      } else {
        parent.right = successor
      }
      successor.left = current.left
    } else {
      // 只有一个叶子节点
      if (parent === null) {
        if (isLeft) {
          this.root = current.left
        } else {
          this.root = current.right
        }
      } else {
        if (current.left) {
          if (isLeft) {
            parent.left = current.left
          } else {
            parent.right = current.left
          }
        } else {
          if (isLeft) {
            parent.left = current.right
          } else {
            parent.right = current.right
          }
        }
      }
    }
  }

  getSuccessor (delNode) {
    let successor = delNode.right
    let successorParent = delNode.right

    while (successor.left !== null) {
      successorParent = successor
      successor = successor.left
    }
    if (delNode.right !== successor) {
      successorParent.left = successor.right
      successor.right = delNode.right
    }
    return successor
  }
}

const t = new Tree()
function print () {
  let str = ''
  t.binarySearch((node) => {
    str += String(node.key) + '-'
  })
  console.log(str)
}

t.insert(11, 11)
t.insert(9, 9)
t.insert(30, 30)
t.insert(8, 8)
t.insert(10, 10)
t.insert(5, 5)
t.insert(25, 25)
t.insert(22, 22)
t.insert(26, 26)
t.insert(34, 34)
t.insert(31, 31)
t.insert(33, 33)
t.insert(35, 35)
print()
t.remove(10)
print()
// t.delNode(6)
// console.log(t)
