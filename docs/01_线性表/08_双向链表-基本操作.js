class DLinkList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  DNode = class DNode {
    constructor(data) {
      this.prior = null;
      this.next = null;
      this.data = data;
    }
  }
  // 1. 尾插
  append(data) {
    const newDNode = new this.DNode(data);
    if (this.head === null) {
      this.head = newDNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newDNode;
      newDNode.prior = currentNode;
    }
    this.length++;
  }

  // 2. 序列查找(同单链表)
  getData(position) {
    if (position < 0 || position >= this.length) return null;
    let currentNode = this.head;
    let index = 0;
    while (index++ < position) {
      currentNode = currentNode.next;
    }
    return currentNode.data;
  }

  // 3. 按索引查找(同单链表)
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

  // 4. 插入(s;s;后;前)
  insert(position, data) {
    const newDNode = new this.DNode(data)
    if (position < 0 || position > this.length) return false;
    let index = 0;
    let currentDNode = this.head;
    while (index++ < position && currentDNode.next !== null) {
      currentDNode = currentDNode.next;
    }
    if (this.length === 0) {
      this.head = newDNode;
    } else if (position === 0) {
      newDNode.next = currentDNode;
      newDNode.prior = currentDNode.prior;
      currentDNode.prior = newDNode;
      this.head = newDNode;
    } else if (position === this.length) {
      newDNode.prior = currentDNode;
      currentDNode.next = newDNode;
    } else {
      newDNode.next = currentDNode;
      newDNode.prior = currentDNode.prior;
      currentDNode.prior.next = newDNode;
      currentDNode.prior = newDNode;
    }
    this.length++;
    return newDNode;
  }

  // 3. 删除
  removeAt(position) {
    if (position < 0 || position >= this.length) return null;
    let index = 0;
    let currentDNode = this.head;
    while (index++ < position) {
      currentDNode = currentDNode.next;
    }
    // 是否有前一个结点
    if(position === 0) {
      this.head = currentDNode.next;
    } else {
      currentDNode.prior.next = currentDNode.next;
    }
    // 是否有后一个结点
    if (currentDNode.next !== null) {
      currentDNode.next.prior = currentDNode.prior;
    }
    this.length--;
    return currentDNode;
  }

  remove(data) {
    this.removeAt(this.indexOf(data))
  }

  isEmpty() {
    return this.length === 0;
  }
  
  size() {
    return this.length;
  }
}


const linkList = new DLinkList();
linkList.append("a");
linkList.append("b");
linkList.append("c");
linkList.insert(0, "y")  // yabc
linkList.insert(3, "w")  // yabc
linkList.insert(5, "j")  // yabwcj
linkList.removeAt(0)
linkList.removeAt(1)
linkList.remove("j")
console.log(linkList);
