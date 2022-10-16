/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  const backtracking = (sum, node) => {
    if (!node.left && !node.right) {
      if (sum === targetSum) return true;
      return false;
    }
    if (node.left && backtracking(sum + node.left.val, node.left)) {
      return true;
    }
    if (node.right && backtracking(sum + node.right.val, node.right)) {
      return true;
    }
    return false;
  };
  if (root) return backtracking(root.val, root);
  return false;
};
// @lc code=end
