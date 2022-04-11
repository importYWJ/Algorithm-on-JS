class LinkList {
  constructor() {
    this.head = null
  }
  LNode = class LNode {
    constructor(data) {
      this.data = data
      this.next = null 
    }
  }
}

// 构造函数写法
function LinkList() {
  // 头指针
  this.head = null
  // 结点
  function LNode(data) {
    this.data = data;
    this.next = null;
  }
}
