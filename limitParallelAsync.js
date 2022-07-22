






const limitParallelAsync = (limit) => {
  const queue = []
  let activeCount = 0

    const next = () => {
      activeCount--
      if (queue.length) {
        queue.shift()()
      }
    }

  return (fn) => new Promise((resolve,reject) => {
    const run = () => {
       activeCount++
       fn().then((rs)=>{
         resolve(rs)
         next()
       }, err => {
         reject(rs)
         next()
       })
    }

    if (activeCount < limit) {
      run()
    } else {
      queue.push(run)
    }
  })
}

const collectPromise = limitParallelAsync(2)

const fakeAsync = (timer, type) => {
  return () => new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${timer}---${type}`)
      resolve(`${timer}---${type}`)
    }, timer)
  })
}

const arr = [
  collectPromise(fakeAsync(500, 'first')),
  collectPromise(fakeAsync(1000, 'second')),
  collectPromise(fakeAsync(2000, 'third')),
  collectPromise(fakeAsync(2000, 'fourth')),
  collectPromise(fakeAsync(1000, 'five')),
  collectPromise(fakeAsync(1000, 'five1')),
  collectPromise(fakeAsync(3000, 'five2')),
  collectPromise(fakeAsync(3000, 'five3')),
]


Promise.all(arr).then(rs => {
  console.log(rs)
})








