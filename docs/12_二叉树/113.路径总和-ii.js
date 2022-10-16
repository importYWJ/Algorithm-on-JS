/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const backtracking = (node, sum) => {
    if (!node.left && !node.right && sum === targetSum) {
      result.push([...path]);
      return;
    }
    if (node.left) {
      path.push(node.left.val);
      backtracking(node.left, sum + node.left.val);
      path.pop();
    }
    if (node.right) {
      path.push(node.right.val);
      backtracking(node.right, sum + node.right.val);
      path.pop();
    }
  };
  const result = [],
    path = [];
  if (root) {
    path.push(root.val);
    backtracking(root, root.val);
  }
  return result;
};
// @lc code=end
