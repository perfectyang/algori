const pr = new Promise((resolve, reject) => {
  reject(1)
}).then((rs) => {
  return rs
}, reason => {
  console.log(reason)
  return null
})

pr.then(rs => {
  console.log('只会走这里', rs)
}, reason => {
  console.log('在这里', reason)
})