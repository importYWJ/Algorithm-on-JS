/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start
class LinkNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

var MyLinkedList = function () {
  this.size = 0;
  this.head = null;
  this.tail = null;
};

/**
 *
 * @param {number} index
 * @return {LinkNode}
 */
MyLinkedList.prototype.getNode = function (index) {
  if (index < 0 || index >= this.size) return null;
  let cur = new LinkNode(0, this.head);
  while (index-- >= 0) {
    cur = cur.next;
  }
  return cur;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;
  return this.getNode(index).val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new LinkNode(val, this.head);
  this.size++;
  this.head = node;
  if (!this.tail) {
    this.tail = node;
  }
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new LinkNode(val, null);
  this.size += 1;
  if (this.tail) {
    this.tail.next = node;
    this.tail = node;
    return;
  }
  this.tail = node;
  this.head = node;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;
  if (index === this.size) {
    this.addAtTail(val);
    return;
  }
  if (index === 0) {
    this.addAtHead(val);
    return;
  }
  const node = this.getNode(index - 1);
  node.next = new LinkNode(val, node.next);
  this.size++;
  return;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;
  if (index === 0) {
    this.head = this.head.next;
    this.size--;
    if (index === this.size - 1) {
      this.tail = null;
    }
    return;
  }
  const node = this.getNode(index - 1);
  node.next = node.next.next;
  if (index === this.size - 1) {
    this.tail = node;
  }
  this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
