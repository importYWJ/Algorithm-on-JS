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
  isEmpty() {
    return this.length === 0;
  }
  size() {
    return this.length;
  }
}

const linkList = new LinkList()
linkList.append("a")
linkList.append("b")
linkList.append("c")
linkList.append("d")
linkList.removeAt(0)
console.log(linkList);
