
function chunk (arr, size) {
  const len = arr.length;
  const rows = [];
  for (let i = 0; i < len; i++) {
    const tmp = arr[i];
    if (i % size === 0) {
      rows.push([tmp]);
    } else {
      rows[rows.length - 1].push(tmp);
    }
  }
  return rows;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

console.log(chunk(arr, 4))





