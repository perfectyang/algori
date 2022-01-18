// 堆
class MiniHeap {
  constructor () {
    this.heap = []
  }

  getParentIndex (index) {
    return (index - 1) >> 1
  }

  getLeftIndex (index) {
    return index * 2 + 1
  }

  getRightIndex (index) {
    return index * 2 + 2
  }

  swap (i, j) {
    const temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }

  shirUp (index) {
    if (index === 0) return
    const parentIndex = this.getParentIndex(index)
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index)
      this.shirUp(parentIndex)
    }
  }
  
  shirDown(index) {
    const leftIndex = this.getLeftIndex(index)
    const rightIndex = this.getRightIndex(index)
    if (this.heap[index] > this.heap[leftIndex]) {
      this.swap(leftIndex, index)
      this.shirUp(leftIndex)
    } else if (this.heap[index] > this.heap[rightIndex]) {
      this.swap(rightIndex, index)
      this.shirUp(rightIndex)
    }
  }

  insert(val) {
    this.heap.push(val)
    this.shirUp(this.heap.length - 1)
  }

  pop() {
    const node = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.shirDown(0)
    return node
  }

}

class MaxHeap {
  constructor () {
    this.heap = []
  }

  getParentIndex (index) {
    return (index - 1) >> 1
  }

  getLeftIndex (index) {
    return index * 2 + 1
  }

  getRightIndex (index) {
    return index * 2 + 2
  }

  swap (i, j) {
    const temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }

  shirUp (index) {
    if (index === 0) return
    const parentIndex = this.getParentIndex(index)
    if (this.heap[parentIndex] < this.heap[index]) {
      this.swap(parentIndex, index)
      this.shirUp(parentIndex)
    }
  }
  
  shirDown(index) {
    const leftIndex = this.getLeftIndex(index)
    const rightIndex = this.getRightIndex(index)
    if (this.heap[index] < this.heap[leftIndex]) {
      this.swap(leftIndex, index)
      this.shirUp(leftIndex)
    } else if (this.heap[index] < this.heap[rightIndex]) {
      this.swap(rightIndex, index)
      this.shirUp(rightIndex)
    }
  }

  insert(val) {
    this.heap.push(val)
    this.shirUp(this.heap.length - 1)
  }

  pop() {
    const node = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.shirDown(0)
    return node
  }

  sort () {
    const ret = []
    while (this.heap.length > 1) {
      ret.push(this.pop())
    }
    return ret
  }

}


// class Test {
//   run () {
//     console.log(111)
//   }
// }

// const t = new Test()
// t.run()

const instanceHeap = new MiniHeap()
const instanceMaxHeap = new MaxHeap()
instanceMaxHeap.insert(1)
instanceMaxHeap.insert(3)
instanceMaxHeap.insert(2)
instanceMaxHeap.insert(5)
instanceMaxHeap.insert(6)
instanceMaxHeap.insert(4)
instanceMaxHeap.insert(1)

const ret = instanceMaxHeap.sort()
console.log(ret, instanceMaxHeap.heap)
//         6
//     5       4
// 3