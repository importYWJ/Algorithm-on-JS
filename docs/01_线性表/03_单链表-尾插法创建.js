class LinkList {
  constructor() {
    this.head = null;
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
  }
}


const linkList = new LinkList()
linkList.append("a")
linkList.append("b")
linkList.append("c")
console.log(linkList);