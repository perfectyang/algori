const arr = [
  {id: 1, name: '部门1', pid: 0},
  {id: 9, name: '部门9', pid: 0},
  {id: 2, name: '部门2', pid: 1},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 2},
  {id: 6, name: '部门6', pid: 5},
]

function tree (list) {
  const itemMap = {}
  const result = []
  for (const ob of list) {
    const {id, pid} = ob
    if (!itemMap[id]) {
      itemMap[id] = {
        ...ob,
        children: []
      }
    }
    if (pid === 0) {
      result.push(itemMap[id])
    } else {
      itemMap[pid].children.push(itemMap[id])
    }
  }
  return result
}

const result = tree(arr)
console.log(JSON.stringify(result, 2))
