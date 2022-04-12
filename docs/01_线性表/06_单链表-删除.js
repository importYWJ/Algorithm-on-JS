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
}

const linkList = new LinkList()
linkList.append("a")
linkList.append("b")
linkList.append("c")
linkList.append("d")
linkList.removeAt(0)
console.log(linkList);
