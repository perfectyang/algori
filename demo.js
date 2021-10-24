

function recurse (target, prefix) {
  let texts = []
  let map = []
  for (const [key, value] of Object.entries(target)) {
    const name = prefix ? prefix + '.' + key : key
    if (typeof value === 'object') {
      const {texts: sTexts, map: sMaps} = recurse(value, name)
      texts = texts.concat(sTexts)
      map = map.concat(sMaps)
    } else {
      texts.push(value)
      map.push({
        name,
        value
      })
    }
  }
  return {texts, map}
}