

// const oldData = [1, 2, 3, 4, 5, 6, 7]
// const newData = [1, 2, 4, 3, 5, 6, 7]

const oldData = [4, 6, 2, 1, 4, 7, 9, 3]
const newData = [3, 4, 6, 2, 1, 4, 7, 9]

const comparePosition = (oldData, newData, cb) => {
  let i = 0
  let j = 0
  const len = oldData.length
  const record = {}
  while (i < len || j < len) {
    const oldPost = oldData[i]
    const newPost = newData[j]
    if (cb(oldPost) === cb(newPost)) {
      i++
      j++
    } else if (oldPost !== newPost) {
      if (cb(oldData[i+1]) === cb(newPost)) {
        record.start = {
          position: i,
          node: oldData[i]
        }
        
        i++
      } else {
        record.end = {
          position: j,
          node: oldData[j]
        }
        j++
      }
    }
  }
  return record
}
const ret = comparePosition(oldData, newData, (a) => {
  return a
})
console.log(ret)





