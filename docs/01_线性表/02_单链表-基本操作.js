class LinkList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  LNode = class LNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  // 尾插法
  append(data) {
    const newLNode = new this.LNode(data); // 开 + 数
    if (this.head === null) {
      this.head = newLNode
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newLNode;
    }
    this.length++;
  }
  // 按序号查找值
  getData(position) {
    if (position < 0 || position >= this.length) return null;
    let currentNode = this.head;
    let index = 0;
    while (index++ < position) {
      currentNode = currentNode.next;
    }
    return currentNode.data;
  }
  // 按值查找索引
  indexOf(data) {
    if (this.length === 0) return null; 
    let currentNode = this.head;
    let index = 0;
    while (index < this.length) {
      if (currentNode.data === data) {
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }
  }
  // 插入结点(查找 + 头插法)
  insert(position, data) {
    if (position < 0 || position > this.length) return null;
    const newLNode = new this.LNode(data);
    let previousNode = null;
    let currentNode = this.head;
    let index = 0;
    while (index++ < position) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    newLNode.next = currentNode;
    if (position === 0) {
      this.head = newLNode;
    } else {
      previousNode.next = newLNode;
    }
    this.length++;
    return newLNode;
  }
  removeAt(position) {
    if (position < 0 || position >= this.length) return null;
    let previousNode = null;
    let currentNode = this.head;
    let index = 0;
    while (index++ < position) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (position === 0) {
      this.head = currentNode.next;
    } else {
      previousNode.next = currentNode.next; // currentNode对象会自行GC
    }
    this.length--;
    return currentNode;
  }
  rermove(data) {
    this.removeAt(this.indexOf(data))
  }
  isEmpty() {
    return this.length === 0;
  }
  size() {
    return this.length;
  }
}