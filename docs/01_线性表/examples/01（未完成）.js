// 设计一个递归算法，删除不带头结点的单链表L中所有值为x的结点。
function LNode(data) {
  this.data = data;
  this.next = null;
}

function append(data) {
  const newLNode = new LNode(data);
  let p = this;
  while (p.next !== null) {
    p = p.next;
  }
  p.next = newLNode;
}

function del_X(L, x) {
  if (L === null) return;
  let p;
  if (L.data === x) {
    p = L;
    L = L.next;
    p.next = null
    del_X(L, x);
  } else {
    del_X(L.next, x);
  }
}

const linkList = new LNode("a");
append.call(linkList, "a")
append.call(linkList, "b")
append.call(linkList, "c")
append.call(linkList, "d")
append.call(linkList, "d")
append.call(linkList, "e")
append.call(linkList, "e")
append.call(linkList, "f")

del_X(linkList, "d")
console.log(linkList);
