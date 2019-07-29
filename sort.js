class AllSort {
    constructor () {
        this.array = []
        this.length = 0
    }

    insert (num) {
        this.array.push(num)
        this.length += 1
    }

    swap (m, n) {
        let temp = this.array[m]
        this.array[m] = this.array[n]
        this.array[n] = temp
    }
    // 冒泡排序
    bubblesort () {
        for (let j = this.length - 1; j >= 0; j--) {
            for (let i = 0; i < j; i++) {
                if (this.array[i] > this.array[i + 1]) {
                    this.swap(i, i+1)
                }
            }
        }
    }

  
    // 选择排序
    selectionsort () { // 
        for (let j = 0 ; j < this.length - 1; j++) {          
            let min = j // 选择默认一个最小值的位置， 然后去寻找数组中的其他值， 是否是最小值
            for (let i = min + 1; i < this.length; i++) {
                if (this.array[min] > this.array[i]) {
                    min = i
                }
            }
            this.swap(j, min)
        }
    }
    // 插入排序
    insertionsort () {
        // [ 10, 6, 3, 10]
        for (let i = 1; i < this.length; i++) {
            let temp = this.array[i]
            let j = i
            while (this.array[j - 1] > temp && j > 0) {
                this.array[j] = this.array[j - 1]
                j--
            }
            this.array[j] = temp
        }
    }

    // 希尔排序
 
    shellsort () {
        let gap = Math.floor(this.length / 2)
        while (gap >= 1) {
            for (let i = gap; i < this.length; i++) {
                let temp = this.array[i]
                let j = i
                while (this.array[j - gap] > temp && j > gap - 1) {
                    this.array[j] = this.array[j - gap]
                    j  = j - gap
                }
                this.array[j] = temp
            }
            gap = Math.floor(gap / 2)
        }
    }



}

let b1 = new AllSort()
b1.insert(10)
b1.insert(8)
b1.insert(21)
b1.insert(30)
b1.insert(15)
b1.insert(33)
b1.insert(31)
b1.insert(100)
b1.insert(2)
console.log(b1.array)
// b1.bubblesort()
// b1.selectionsort()
// b1.insertionsort()
b1.shellsort()
console.log(b1.array)
