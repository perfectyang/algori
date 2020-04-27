class Update {
  constructor (update) {
    this.nextUpdate = null
    this.update = update
  }
}

class UpdateState {
  constructor () {
    this.baseState = null
    this.firstUpdate = null
    this.lastUpdate = null
  }

  enqueue (updates) {
    const update = new Update(updates)
    if (this.firstUpdate === null) {
      this.firstUpdate = this.lastUpdate = update
    } else {
      this.lastUpdate.nextUpdate = update
      this.lastUpdate = update
    }
  }

  forceUpdate () {
    console.log('this.baseState', this.baseState)
    let currentState = this.baseState || {}
    let current = this.firstUpdate
    while (current) {
      let nextState = typeof current.update === 'function' ? current.update(currentState) : current.update
      currentState = { ...currentState, ...nextState };//使用当前更新得到新的状态
      current = current.nextUpdate
    }
    this.firstUpdate = this.lastUpdate = null;//更新完成后要把链表清空
    this.baseState = currentState;
    return currentState;
  }

}

const p = new UpdateState()
// setState({})
p.enqueue({name: 'perfectyang'})
p.enqueue({number: 0})
p.enqueue((state) => ({number: state.number + 1}))
p.forceUpdate()
// console.log(p.baseState)
p.enqueue({what: 'sss'})
p.forceUpdate()
// console.log(p.baseState)