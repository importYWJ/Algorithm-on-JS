/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function (root) {
  const queue = [root],
    result = [];
  if (!root) return result;
  while (queue.length > 0) {
    let levelLen = queue.length;
    let levelRes = [];
    for (let i = 0; i < levelLen; i++) {
      let node = queue.shift();
      levelRes.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(levelRes);
  }
  return result;
};
// @lc code=end
