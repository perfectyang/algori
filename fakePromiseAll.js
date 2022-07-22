
const fakePromiseAll = (promises) => {
  const len = promises.length
  let count = 0
  let result = []

  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      promise.then(rs => {
       count++
       result = result.concat(rs)
       if (count === len) {
         resolve(result)
       }
      }, err => {
       reject([err])
      })
    })
  })
}


const fakeAsync = (timer, type) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${timer}---${type}`)
      if (timer === 1000) {
        reject(`${timer}---${type}`)
      } else {
        resolve(`${timer}---${type}`)
      }
    }, timer)
  })
}

const arr = [
  fakeAsync(500, 'first'),
  fakeAsync(1000, 'second'),
  fakeAsync(2000, 'third'),
  fakeAsync(2000, 'fourth'),
  fakeAsync(1000, 'five'),
  fakeAsync(1000, 'five1'),
  fakeAsync(3000, 'five2'),
  fakeAsync(3000, 'five3'),
]

// fakePromiseAll
fakePromiseAll(arr).then(rs => {
  console.log('---', rs)
}, er => {
  console.log('----err', er)
})


// const f = () => 1;

// (async () => f())().then(rs => {
//   console.log('sucess', rs)
// }, err => {
//   console.log('err', err)
// });

// Promise.try(() => fakeAsync(500)).then(rs => {
//   console.log('rs', rs)
// })








