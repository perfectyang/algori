function Graph () {
   this.vertList = new Map() 
   this.recordList = new Map()

  // {a, b, c , d}
  // a -----> [b, c, d]
  // b --- [c]


   this.addVertex = function (vert) {
      this.vertList.set(vert, [])
   }

   this.addEdge = function  (l, r) {
      if (this.vertList.has(l)) {
        if (this.vertList.has(r)) {
          this.vertList.get(l).push(r)
        }
      }
   }

   this.bfs = function (node) {
     const queue = [node]
     // 此处作一个[]队列
     while (queue.length) {
       const val = queue.shift()
       console.log('val', val)
       // 作节点标识, 遍历过的节点就不需要再加到队列里面去遍历了
       this.recordList.set(val, true)
       const relativeEdg = this.vertList.get(val)
       relativeEdg.forEach((edg) => {
         if (!this.recordList.has(edg)) {
            queue.push(edg) 
         }
       })
     }
   }

   this.dfs = function (node) {
     const vertList = this.vertList
     const recordList = this.recordList
     function recurseRead (node) {
       // 作节点标识, 遍历过的节点就不需要再遍历了
       recordList.set(node, true)
       console.log('node', node)
       const edgList = vertList.get(node)
       edgList.forEach((edg) => {
        if (!recordList.has(edg)) {
          recurseRead(edg)
        }
       })
     }
     recurseRead(node)
   }




}
const graph = new Graph()
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addVertex(5)
graph.addVertex(6)
graph.addVertex(7)
graph.addVertex(8)
graph.addVertex(9)

graph.addEdge(1, 2)
graph.addEdge(1, 7)
graph.addEdge(2, 3)
graph.addEdge(2, 5)
graph.addEdge(3, 2)
graph.addEdge(3, 6)
graph.addEdge(4, 5)
graph.addEdge(5, 4)
graph.addEdge(5, 2)
graph.addEdge(5, 8)
graph.addEdge(6, 3)
graph.addEdge(6, 9)
graph.addEdge(7, 1)
graph.addEdge(7, 8)
graph.addEdge(8, 5)
graph.addEdge(8, 7)
graph.addEdge(8, 9)
graph.addEdge(9, 6)
graph.addEdge(9, 8)

// graph.bfs(1)
/* 打印结果：
			1
			2
			7
			3
			5
			8
			6
			4
			9
*/
graph.dfs(2)
/* 打印结果：
			1
			2
			3
			6
			9
			8
			5
			4
			7
*/

