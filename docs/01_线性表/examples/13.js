// 尽可能高效地查找链表中倒数第k个位置上的结点，输出该结点的data值。
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
  findReverse(k) {
    let p = this.head;
    let q = this.head;
    let count = 1;
    while (p !== null) {
      if (count >= k && p.next !== null) {
        q = q.next;
      } else {
        count++;
      }
      p = p.next;
    }
    return q.data;
  }
}


const linkList = new LinkList()
linkList.append("a")
linkList.append("b")
linkList.append("c")
linkList.append("d")
console.log(linkList.findReverse(4));