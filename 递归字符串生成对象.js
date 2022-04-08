
const cutString = (str, value) => {
  const idx = str.lastIndexOf('.')
  if (idx > -1) {
    const prefix = str.substring(0, idx)
    const key = str.substring(idx + 1)
    const tmp = {
      [key]: value
    }
    return cutString(prefix, tmp)
  } else {
    return {
      [str]: value
    }
  }
}
const demo = 'a.b.c.d.e.f'
const ret = cutString(demo, 'perfectyang')
console.log(JSON.stringify(ret, 2))