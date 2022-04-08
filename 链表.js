class NewNode {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

class NodeLink {
  constructor () {
    this.length = 0
    this.root = null
  }

  addNode (node) {
    if (this.root === null) {
      this.root = node
    } else {
      let currentNode = this.root
      while (currentNode.next !== null) {
        currentNode = currentNode.next
      }
      currentNode.next = node
    }
    this.length++
  }

  removeNode (node) {

    if (this.root === null) {
      return -1
    }
    if (this.root.val === node.val) {
      this.root = node.next
      this.length--
      return
    }

    let currentNode = this.root
    while (currentNode.next !== null) {
      if (currentNode.next.val == node.val) {
        // 此操作删除节点，即指针更改
        currentNode.next = currentNode.next.next
        this.length--
        break
      }
      currentNode = currentNode.next
    }
  }

}
const link = new NodeLink()
const a =new NewNode(1)
const b =new NewNode(2)
const c =new NewNode(3)
const d =new NewNode(4)
const e =new NewNode(5)
const extra = new NewNode(8)
link.addNode(a)
link.addNode(b)
link.addNode(c)
link.addNode(d)
link.addNode(e)
// link.removeNode(d)

// const ret = link.removeNode(extra)
// console.log(ret)

// console.log(JSON.stringify(link.root, 2), link.length)


// pre   cur    temp
// 1     2      3      4
// temp = cur.next
// cur.next = pre
// pre = cur
// cur = temp
function reverseLink(node) {
  let pre = null
  let cur = node
  let temp = null
  while (cur != null) {
    temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp
  }
  return pre
}

// 查找公共元素, 链表
function getParentRoot (nodeA, nodeB) {
  let pA = nodeA
  let pB = nodeB
  while(pA.val !== pB.val) {
    pA = pA.next === null ? nodeB : pA.next
    pB = pB.next === null ? nodeA : pB.next
  }
  return pA
}


// console.log(JSON.stringify(reverseLink(link.root), 2), link.length)

// 查找公共元素, 数组版本
const a1 = [3, 1, 2, 4, 5, 9]
const a2 = [8, 10, 6, 7, 4, 5, 9]
function getCommonEl (a1, a2) {
  let i = 0
  let j = 0
  let temp1 = a1.concat(a2)
  let temp2 = a2.concat(a1)
  while (temp1[i] != temp2[j]) {
    i++
    j++
  }
  return temp2.slice(j, temp2.length)
}
const ar = getCommonEl(a1, a2)








function mergeLink (l1, l2) {
  const root = {val: '', next: null}
  let p = root
  while (l1 && l2) {
    if (l1.val < l2.val) {
      p.next = l1
      l1 = l1.next
    } else {
      p.next = l2
      l2 = l2.next
    }
    if (p.next !== null) {
      p = p.next
    }
  }
  if (l1) {
    p.next = l1
  }
  if (l2) {
    p.next = l2
  }
  return root.next
}

function merge (arr) {
  const flatten = [...arr]
  while (flatten.length >= 2) {
    const l1 = flatten.shift()
    const l2 = flatten.shift()
    const ret = mergeLink(l1, l2)
    flatten.push(ret)
  }
  return flatten[0]
}

const link2 = new NodeLink();
[2, 4, 6, 8, 10].forEach(num => {
  link2.addNode(new NewNode(num))
})
const link3 = new NodeLink();
[1, 3, 5, 7, 9, 11].forEach(num => {
  link3.addNode(new NewNode(num))
});
const link4 = new NodeLink();
[11, 12, 13, 14, 15, 16].forEach(num => {
  link4.addNode(new NewNode(num))
});
// const arr = [link2.root, link3.root, link4.root]

// const ret = merge(arr)
// console.log('ret', JSON.stringify(ret))

// const re = mergeLink(link2.root, link3.root)
// console.log('ret', JSON.stringify(re))

function reverseLink2 (link) { 
  let pre = null
  let tmp = null
  let cur = link
  while (cur != null) {
    tmp = cur.next
    cur.next = pre
    pre = cur
    cur = tmp
  }
  return pre
}
const lins = reverseLink2(link4.root)

console.log(JSON.stringify(lins))