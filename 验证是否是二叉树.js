

function isValiableTree(node, min, max) {
  if (!node) return true
  if (node && (node.value <= min || node.value >= max)) return false
  return isValiableTree(node.left, min, node.value) && isValiableTree(node.right, node.value, max)
}

const node = {
  value: 10,
  left: {
    value: 5,
  },
  right: {
    value: 16,
    left: {
      value: 11
    },
    right: {
      value: 8
    }
  }
}

const bool = isValiableTree(node, -Infinity, Infinity)
console.log(bool)
