


const fakeSetInterval = (callback, delay) => {
  const now = Date.now
  let startTime = endTime = now();
  let timer
  const loop = () => {
    timer = requestAnimationFrame(loop)
    endTime = now()
    if ((endTime - startTime) > delay) {
      callback(timer)
      startTime = endTime = now()
    }
  }
  timer = requestAnimationFrame(loop)
  return timer
}

let count = 0
fakeSetInterval((timer) => {
  console.log('count', count)
  if (count > 5) {
    cancelAnimationFrame(timer)
  }
  count++
}, 2000)

