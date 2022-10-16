/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  const result = [],
    queue = [root];
  if (!root) return result;
  while (queue.length) {
    const len = queue.length;
    const levelRes = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      levelRes.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.unshift(levelRes);
  }
  return result;
};
// @lc code=end
