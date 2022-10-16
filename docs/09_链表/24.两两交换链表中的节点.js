/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let p = new ListNode(0, head),
    tmp = p;
  while (tmp.next && tmp.next.next) {
    let tmp1 = tmp.next,
      tmp2 = tmp.next.next;
    tmp.next = tmp2;
    tmp1.next = tmp2.next;
    tmp2.next = tmp1;
    tmp = tmp1;
  }
  return p.next;
};
// @lc code=end
