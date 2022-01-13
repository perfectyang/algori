`由于懒得上 ts, 用这个先代替一下子
Fiber: {
  type: string | function,
  props: Props,
  flag?: 'ADD' | 'UPDATE' | 'DELETE',
  dom?: HTMLElement,
  lastState?: Fiber, ---> 保存了上一次状态的 fiber
  chilrenFiber?: Fiber,
  parentFiber?: Fiber,
  subSiblingFiber?: Fiber
}

Props: {
  children: Fiber,
  [key: string]: any
}`



/**
 * createElement 和 createTextFiber: 渲染函数, 用于从 jsx 返回基本 fiber 结构
 */
function createElement(type, props, childrens) {
  return {
    type,
    props: {
      ...props,
      children: childrens.map(children => {
        return typeof children === 'object' ?
          children : /[^\n\s]/.test(children) ?
            createTextFiber(children) : 'Invalid Text'
      }).filter(i => i !== 'Invalid Text')
    }
  }
}


function createTextFiber(text) {
  return createElement('TEXT', { nodeValue: text }, [])
}



/**
 * createDom 和 updateDom: 用于从 fiber 结构创建和更新真实 DOM
 */
function createDom(fiber) {
  let dom
  if (fiber.type === 'TEXT') {
    dom = document.createTextNode(fiber.props.nodeValue);
  } else {
    dom = document.createElement(fiber.type)

    // 在真正的 DOM 上挂载 fiber 的 props
    fiber.props && updateDom(dom, {}, fiber.props)
  }
  return dom
}


function updateDom(dom, oldAttributes = {}, newAttributes = {}) {

  Object.entries(oldAttributes)
    .filter(([key, _]) => key !== 'children')
    .forEach(([key, val]) => {
      if (key.indexOf('on') === 0) {
        dom.removeEventListener(key.substr(2).toLowerCase(), val, false);
      } else {
        dom[key] = ''
      }
    })

  Object.entries(newAttributes)
    .filter(([key, _]) => key !== 'children')
    .forEach(([key, val]) => {
      if (key.indexOf('on') === 0) {
        dom.addEventListener(key.substr(2).toLowerCase(), val, false)
      } else {
        dom[key] = val
      }
    })
}



/**
 * 五个重要的全局变量
 */
let workInProgressFiber = null
let nextToDealWithFiber = null
let lastDealedFiber = null
let toBeDeletedFibers = null
let currentFCFiber = null



/**
 * 把数据变响应式
 */
function reactive(init) {
  const oldData = currentFCFiber?.lastState?.data
  let data = oldData || makeReactive(init)
  currentFCFiber.data = data
  return data
}


function makeReactive(data) {
  for (const key in data) {
    if (typeof data[key] === 'object') {
      data[key] = makeReactive(data[key])
    }
  }
  return new Proxy(data, {
    set(target, key, value) {
      Reflect.set(target, key, value)

      if (!data.hasOwnProperty(key)) return true

      // 数据改变后即添加一次该 fiber 的处理
      commitToWorkLoop(
        lastDealedFiber.dom,
        lastDealedFiber.props,
        lastDealedFiber
      )
      return true
    }
  })
}



/**
 * 等于 useEffect
 */
let effectIndex = null
function Effect(func, dep) {
  const oldEffect = currentFCFiber?.lastState?.effects[effectIndex]

  let effect
  if (oldEffect) {
    if (dep) {
      if (dep.length) {
        effect = isChanged(oldEffect[1], dep) ? [func, dep, 'DO'] : [func, dep, 'SKIP']
      } else {
        effect = [func, dep, 'DO']
      }
    } else {
      effect = [func, dep, 'SKIP']
    }
  } else {
    effect = [func, dep, 'DO']
  }

  currentFCFiber.effects.push(effect)
  effectIndex++
}


function isChanged(oldDep, newDep) {
  return !oldDep ||
    oldDep.length !== newDep.length ||
    newDep.some((arg, index) => !Object.is(arg, oldDep[index]))
}



/**
 * 将初始的, 或改变了的 fiber 提交至 workLoop
 */
function commitToWorkLoop(dom, props, lastState) {
  workInProgressFiber = {
    dom,
    props,
    lastState
  }

  nextToDealWithFiber = workInProgressFiber
  toBeDeletedFibers = []
}



/**
 * 循环处理 fiber 的过程
 */
function workLoop(deadline) {

  // 1. 这个 while 循环会在所有 fiber 处理完后或者时间到了的时候结束
  while (nextToDealWithFiber && deadline.timeRemaining() > 1) {
    nextToDealWithFiber = dealWithFiberAndReturnNextToDealFiber(nextToDealWithFiber)
  }

  // 2. fiber 处理完后统一提交渲染
  if (!nextToDealWithFiber && workInProgressFiber) {
    commitRealDomOperation()
  }

  // 3. 如果任务还没完但是时间到了, 需要继续注册一个 requestIdleCallback 继续下一轮循环
  requestIdleCallback(workLoop)
}


// 开启 workLoop
requestIdleCallback(workLoop)



/**
 * dealWithFiberAndReturnNextToDealFiber 用来处理当前 fiber 任务，返回的是下一个 fiber 任务
 */
function dealWithFiberAndReturnNextToDealFiber(fiber) {
  const isFunctionComponent = fiber.type instanceof Function

  if (isFunctionComponent) {
    dealWithFunctionComponent(fiber)
  }
  else {
    dealWithNormalElement(fiber)
  }

  // 这个函数的返回值是下一个任务，这其实是一个深度优先遍历
  // 先找子元素，没有子元素了就找兄弟元素
  // 兄弟元素也没有了就返回父元素
  // 然后再找这个父元素的兄弟元素
  // 最后到根节点结束
  // 这个遍历的顺序其实就是从下到上，从左到右
  if (fiber.childrenFiber) {
    return fiber.childrenFiber
  }

  let nextFiber = fiber
  while (nextFiber) {
    if (nextFiber.subSiblingFiber) {
      return nextFiber.subSiblingFiber
    }
    nextFiber = nextFiber.parentFiber
  }
}



/**
 * dealWithFunctionComponent 和 dealWithNormalElement: 根据 fiber 的 type 来分别处理 组件和一般的节点
 */
function dealWithFunctionComponent(fiber) {
  currentFCFiber = fiber
  effectIndex = 0
  currentFCFiber.effects = []

  // 函数组件的type就是个函数，可以直接执行, 返回 fiber
  const childrenFibers = [fiber.type(fiber.props)]
  reconcileChildrenFiber(fiber, childrenFibers)
}


function dealWithNormalElement(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber)
  }

  const childrenFibers = fiber.props?.children
  reconcileChildrenFiber(fiber, childrenFibers);
}



/**
 * 对 fiber 进行增删查改, 并将这些 fiber 创建为一个链表结构
 */
function reconcileChildrenFiber(fiber, childrenFibers = []) {

  let oldChildrenFiber = fiber.lastState?.childrenFiber
  let prevSiblingFiber = null
  let newFiber = null

  childrenFibers.forEach((childrenFiber, i) => {

    if (!oldChildrenFiber) {
      newFiber = createBrandNewFiber(childrenFiber, fiber)
    }
    else {
      const isSameType = childrenFiber && oldChildrenFiber.type === childrenFiber.type

      if (isSameType) {
        newFiber = createFiber(
          oldChildrenFiber.type,
          childrenFiber.props,
          fiber,
          'UPDATE',
          oldChildrenFiber.dom,
          oldChildrenFiber
        )
      } else {
        deleteFiber(oldChildrenFiber)
        if (childrenFiber) {
          newFiber = createBrandNewFiber(childrenFiber, fiber)
        }
      }

      oldChildrenFiber = oldChildrenFiber.subSiblingFiber
    }

    if (i === 0) {
      fiber.childrenFiber = newFiber
    } else {
      prevSiblingFiber.subSiblingFiber = newFiber
    }

    // 递归把没用上的 oldChildrenFiber 打上删除记号
    if (i === childrenFibers.length - 1) {
      while (oldChildrenFiber) {
        deleteFiber(oldChildrenFiber)
        oldChildrenFiber = oldChildrenFiber.subSiblingFiber
      }
    }

    prevSiblingFiber = newFiber
  })
}



/**
 * createFiber 用于从 jsx 渲染的基础 fiber 结构创建出完整的 fiber 结构
 * createBrandNewFiber 创建一个某个特定 type 的新 fiber
 * deleteFiber 删除 fiber
 */
function createFiber(type, props, parentFiber, flag, dom, lastState) {
  return {
    type,
    props,
    parentFiber,
    flag,
    dom,
    lastState,
  }
}


function createBrandNewFiber(fiber, parentFiber) {
  return createFiber(
    fiber.type,
    fiber.props,
    parentFiber,
    'ADD',
    null,
    null
  )
}


function deleteFiber(fiber) {
  fiber.flag = 'DELETE'
  toBeDeletedFibers.push(fiber)
}



/**
 * 统一提交 DOM 操作
 */
function commitRealDomOperation() {

  // 1. 删除打上删除标记的 fiber 所对应的真实 DOM
  toBeDeletedFibers.forEach(dealWithFiberSRealDom)

  // 2. 开启处理
  dealWithFiberSRealDom(workInProgressFiber.childrenFiber)

  // 3. 操作完后记录一下 lastDealedFiber, 并将 workInProgressFiber 重置
  lastDealedFiber = workInProgressFiber
  workInProgressFiber = null
}


function dealWithFiberSRealDom(fiber) {
  if (!fiber) return

  // 1. 递归查找 fiber 对应 DOM 的父 DOM
  let parentFiber = fiber.parentFiber
  while (!parentFiber.dom) {
    parentFiber = parentFiber.parentFiber
  }

  const parentDom = parentFiber.dom

  // 2. 根据 fiber 的 flag 去进行对应的 DOM 添加, 修改, 与删除操作
  if (fiber.flag === 'ADD' && fiber.dom) {
    if (
      fiber.subSiblingFiber?.dom &&
      fiber.subSiblingFiber.dom?.parentNode === parentDom
    ) {
      parentDom.insertBefore(fiber.dom, fiber.subSiblingFiber.dom)
    } else {
      parentDom.appendChild(fiber.dom)
    }
  }
  else if (fiber.flag === 'DELETE') {
    deleteFiberSRealDom(fiber, parentDom)
  }
  else if (fiber.flag === 'UPDATE' && fiber.dom) {
    updateDom(fiber.dom, fiber.lastState.props, fiber.props)
  }

  // 3. 递归操作子 fiber 和兄弟 fiber 
  dealWithFiberSRealDom(fiber.childrenFiber);


  if (fiber.effects) {
    fiber.effects.forEach((effect) => {
      if (effect[2] === 'DO') effect[0]()
    })
  }

  dealWithFiberSRealDom(fiber.subSiblingFiber);
}


function deleteFiberSRealDom(fiber, parentDom) {
  if (!fiber) return

  if (fiber.dom && fiber.dom?.parentNode === parentDom) {
    parentDom.removeChild(fiber.dom)
  }
  else {
    // dom不存在，则是函数组件, 向下递归查找真实DOM
    deleteFiberSRealDom(fiber.childrenFiber, parentDom)
  }
}



/**
 * 等于 ReactDOM.render
 */
function render(rawFiber, domToMount) {
  commitToWorkLoop(
    domToMount,
    { children: [rawFiber] },
    lastDealedFiber
  )
}



/**
 * 添加样式
 */
const jss = require('jss').default
jss.setup(require('jss-preset-default').default())

function Style(css) {
  return jss.createStyleSheet(css).attach().classes
}



module.exports = {
  createElement,
  render,
  reactive,
  Style,
  Effect
}