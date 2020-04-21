const Queue = require('./queue.js')
class Graph {
  constructor () {
    this.vertices = [] // 顶点集
    this.edgesList = new Queue() // 边集
    //  ['A', 'B', 'c', 'd'] --- vertices
    //  A---> ['B', 'c', 'd']
    //  B---> ['c', 'd']
  }

  toString () {
    let str = ''
    for (let i = 0; i < this.vertices.length; i++) {
      str += this.vertices[i] + '-->' + this.edgesList[this.vertices[i]] + '\n'
    }
    console.log(str)
  }

  // 添加顶点
  addVertice (v) {
    this.vertices.push(v)
    this.edgesList[v] = []
  }

  // 添加边
  addEdge (v1, v2) {
    this.edgesList[v1].push(v2)
    this.edgesList[v2].push(v1)
  }

  // 图的遍历
  // 1.广度遍历 Breath-First-Search

  BFS (initV, handler) {
    const colors = this.initColors()
    const queue = new Queue()
    queue.enqueue(initV)
    while (!queue.isEmpty()) {
      const curV = queue.dequeue(initV)
      colors[curV] = 'gray'
      const vList = this.edgesList[curV]
      for (let i = 0; i < vList.length; i++) {
        const currentV = vList[i]
        if (colors[currentV] === 'white') {
          queue.enqueue(currentV)
          colors[currentV] = 'gray'
        }
      }
      handler(curV)
      colors[curV] = 'black'
    }
  }


  // 2.深度遍历 Depth-First-Search
  DFS () {}
  initColors () {
    const colors = []
    for (let i = 0; i < this.vertices.length; i++) {
      colors[this.vertices[i]] = 'white'
      // 给每个顶点添加一个初始状态
    }
    return colors
  }
}

const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
const graph = new Graph()

for (let i = 0; i < vertices.length; i++) {
  graph.addVertice(vertices[i])
}

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

graph.toString()

function print () {
  let str = ''
  graph.BFS(graph.vertices[0], (v) => {
    // console.log('v', v)
    str += v + ' '
  })
  console.log(str)
}
print()



