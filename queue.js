class Queue {
  constructor () {
    this.items = []
    this.size = 0
  }

  get (val) {
    return this.items[val]
  }

  enqueue (val) {
    this.items.push(val);
    this.size += 1;
  }

  dequeue () {
    if (this.size === 0) return -1
    this.size -= 1;
    return this.items.shift();
  }

  isEmpty () {
    return this.size === 0
  }
}

module.exports = Queue