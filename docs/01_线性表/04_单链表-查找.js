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
  // 尾部
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
    while (index++ < this.length) {
      if (currentNode.data === data) {
        return index;
      }
      currentNode = currentNode.next;
    }
  }
}


const linkList = new LinkList()
linkList.append("a")
linkList.append("b")
linkList.append("c")
console.log(linkList.getData(2));
console.log(linkList.indexOf("b"));
