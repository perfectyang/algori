const tmp1 = [1, 2, 3, 0, 0, 0] 
const m = 3
const tmp2 = [2, 5, 6]
const n = 3

const sort = (list1, m, list2, n) => {
  let point1 = m - 1 
  let point2 = n - 1 
  let len = m + n - 1
  while (len >=0) {
    const tmp1 = list1[point1]
    const tmp2 = list2[point2]
    if (point1 < 0) {
      list1[len] = list2[point2]
      point2--
    } else if (point2 < 0) {
      break
    } else if (tmp1 < tmp2) {
      list1[len] = tmp2
      point2--
    } else if (tmp1 >= tmp2) {
      list1[len] = tmp1
      point1--
    }
    len--
  }
}
sort(tmp1, 3, tmp2, 3)
console.log(tmp1)
