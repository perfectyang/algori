// react hook 理解实现
const React = (function() {
  let hooks = []
  let idx = 0
  function useState (initVal) {
    const state = hooks[idx] || initVal
    // 此处是闭包:
    const _idx = idx
    const setState = newVal =>  {
      console.log('idx', _idx)
      hooks[_idx] = newVal
    }
    idx++
    return [state, setState]
  }

  function useEffect(fn, depsArry) {
    const oldDep = hooks[idx]
    let hasChanged = true
    if (oldDep) {
      hasChanged = depsArry.some((dep, i) => !Object.is(dep, oldDep[i]))
    }
    if (hasChanged) fn()
    hooks[idx] = depsArry
    idx++
  }

  function render(Component) {
    idx = 0
    const C = Component()
    C.render()
    return C
  }



  return {
    useState,
    render,
    useEffect
  }
})()

function Component () {
  const [count, setCount] = React.useState(1)
  const [text, setText] = React.useState('apple')
  React.useEffect(() => {
    console.log('useEffect is working')
  }, [])
  return {
    render: () => console.log({count, text}),
    click: () => setCount(count + 1),
    type: word => setText(word),
  }
}

var App = React.render(Component)
App.click()
var App = React.render(Component)
App.type('pear')
var App = React.render(Component)