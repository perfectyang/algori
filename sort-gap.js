const nodeList = [1, 2, 3, 5, 7, 8, 9]
function gapList (nodeList) {
  let i = 0
  let j = 0
  const len = nodeList.length
  const result = []
  let tmp = []
  while (i < len - 1) {
    j = i + 1
    const pre = nodeList[i]
    const next = nodeList[j]
    if ((pre + 1) === next) {
      tmp.push(pre, next)
      i = j
    } else {
      result.push([...tmp])
      tmp = []
      tmp.push(pre)
      i++
    }
  }
  return result
}
console.log(gapList(nodeList))
