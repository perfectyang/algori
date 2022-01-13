



// 构建字典树函数版本
function buildTires (words) {
  const root = {}
  for (let word of words) {
    // 当把每个单词遍历完后，指针要重新指回到最初的root节占
    let node = root
    for (const k of word) {
      if (!node[k]) {
        node[k] = {}
      }
      node = node[k]
    }
    // abcdef
    node.end = true
  }
  return root
}
// 类版本
class BuildTires {

  constructor () {
    this.root = {}
  }

  add (word) {
    let node = this.root
    for (const k of word) {
      if (!node[k]) {
        node[k] = {}
      }
      node = node[k]
    }
    // 单条链结束标识
    node.end = true
    return this.root
  }

}
const tires = new BuildTires()
tires.add('wfc')
tires.add('wac')
tires.add('fac')
console.log(JSON.stringify(tires.root))




//     w
//   f    a
// c        b
// const ret = buildTires(['wfc', 'wa'])
// console.log(JSON.stringify(ret))
// const stack = []
// function search(k)  {
//   stack.push(k)
//   let idx = 0
//   const len = stack.length
//   let node = ret
//   while (idx < len) {
//     if (!node[stack[idx]]) return false
//     node = node[stack[idx]]
//     if (node.end) return true
//     idx++
//   }
//   return false
// }

// console.log(search('w'))
// console.log(search('f'))
// console.log(search('c'))



// // [a, b, c, d]