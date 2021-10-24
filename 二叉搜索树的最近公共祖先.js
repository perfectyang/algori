
// 普通树
function findParentRoot (node, p, q) {
  if (!node || node.value === q || node.value === p) return node
  const left = findParentRoot(node.left, p, q)
  const right = findParentRoot(node.right, p, q)

  if (left && !right) {
    return left
  }
  if (!left && right) {
    return right
  }
  if (left && right) {
    return node
  }
}

// 二叉树
function findParentTree(node, p, q) {
  let root = node
  while (root) {
    if (node.value > p && node.value > q) {
      root = root.left
    } else if (node.value < p && node.value < q) {
      root = root.right
    } else {
      return root
    }
  }
}




const node = {
  value: 10,
  left: {
    value: 9,
    left: {
      value: 3
    },
    right: {
      value: 5
    }
  },
  right: {
    value: 11,
    left: {
      value: 8
    },
    right: {
      value: 7
    }
  }
}

const rs = findParentRoot(node, 7, 8)
console.log(rs)