/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function (head) {
  if (!head || !head.next) return head;
  let p = head,
    pre = null,
    tmp = null;
  while (p) {
    tmp = p.next;
    p.next = pre;
    pre = p;
    p = tmp;
  }
  return pre;
};
// @lc code=end
