// 将单链表就地逆置，空间复杂度为O(1)。（头插法遍历）
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
}

function reverse(linkList) {
  let p = linkList.head;
  linkList.head = null;
  let r = null;
  while (p !== null) {
    r = p.next;
    p.next = linkList.head;
    linkList.head = p;
    p = r
  }
}

const linkList = new LinkList()
linkList.append("a")
linkList.append("b")
linkList.append("c")
linkList.append("d")
reverse(linkList)
console.log(linkList);