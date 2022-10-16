/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
 * 构成递归条件: 子树也是完全二叉树, 构成递归条件
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  const getSum = function (node) {
    if (!node) return 0;
    return getSum(node.left) + getSum(node.right) + 1;
  };
  return getSum(root);
};
// @lc code=end
