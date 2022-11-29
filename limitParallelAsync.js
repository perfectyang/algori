// 并行限制请求
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


// 是否正在刷新的标记
let isRefreshing = false
//重试队列
let requests = []
export function runPromise(fn) {
  if (!isRefreshing) {
    isRefreshing = true
    requests.push(fn)
    //调用刷新token的接口
    refreshToken().then(res => {
      // token 刷新后将数组的方法重新执行
      requests.forEach((cb) => cb())
      requests = [] // 重新请求完清空
      isRefreshing = false
    }).catch(_ => {
      isRefreshing = false
    })
  } else {
    requests.push(fn)
  }
}






