// 在单链表L中，删除所有值为x的结点。
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

function del_X_all(linkList, x) {
  if (linkList === null) return;
  let p = linkList.next;
  let pre = linkList;
  if (linkList.data === x) {
    linkList = linkList.next;
  }
  while (linkList.data !== x && p !== null) {
    console.log(123);
    if (p.data === x) {
      pre.next = p.next;
    } else {
      pre = p;
      p = p.next;
    } 
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
del_X_all(linkList, "d")
console.log(linkList);