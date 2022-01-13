import { Style } from 'young.js'
import { Effect } from 'young.js'

<div className={s.root}>
  <h1 className={s.h1}>Hello Young.js</h1>
  <div className={s.container}>
    <h3 className={s.h2}>你的帅ss气值: {count}-----{txt}</h3>
    <button className={s.button} onclick={() => count++}>帅气值+1</button>
  </div>
</div>

$: count = 0
$: txt = 'name'
Effect(() => {
  console.log('你又变帅了' + count + '分')
}, [count])

const s = Style({
  '@global': {
    '*': {
      margin: 0,
      color: '#adadfb',
      fontWeight: 500,
      fontFamily: 'Consolas, Menlo, Monaco'
    }
  },
  root: {
    width: 'fit-content',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column'
  },
  h1: {
    margin: '100px 0 30px 0',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 'fit-content',
    height: '100px',
    margin: 'auto',
  },
  h2: {
    margin: '10px 0',
  },
  button: {
    width: '100px',
    height: '30px',
    borderRadius: '25px',
    border: 'none',
    color: 'white',
    backgroundImage: 'linear-gradient(45deg, #a1c4fd 0%, #c2e9fb 100%)'
  }
})

Young('.root')