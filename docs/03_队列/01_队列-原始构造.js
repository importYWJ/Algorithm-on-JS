class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }

  // enqueue(item) 入队，将元素加入到队列中
  enQueue(item) {
    this.items[this.rear++] = item;
  }

  // dequeue() 出队，从队列中删除队头元素，返回删除的那个元素
  deQueue() {
    if (!this.isEmpty())
    return this.items[this.front++];
  }

  // front() 查看队列的队头元素
  front() {
    return this.items[this.front];
  }

  // isEmpty() 查看队列是否为空
  isEmpty() {
    return this.front === 0 && this.rear === 0;
  }

  // size() 查看队列中元素的个数
  size() {
    return this.rear - this.front;
  }

  // toString() 将队列中的元素以字符串形式返回
  toString() {
    let result = "";
    for (let item of this.items) {
      result += item + " ";
    }
    return result;
  }
}

const queue = new Queue()
queue.enQueue(1)
queue.enQueue(2)
queue.enQueue(3)
queue.enQueue(4)
queue.deQueue()

console.log(queue.size());
console.log(queue.getHead());
