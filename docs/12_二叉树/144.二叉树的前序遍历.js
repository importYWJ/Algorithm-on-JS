/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  // const result = [];
  // const dfs = function (node) {
  //   if (!node) return;
  //   result.push(node.val);
  //   dfs(node.left);
  //   dfs(node.right);
  // };
  // dfs(root);
  // return result;

  const result = [],
    stack = [];
  root && stack.push(root);
  while (stack.length) {
    const node = stack.pop();
    if (!node) {
      result.push(stack.pop().val);
      continue;
    }
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
    stack.push(node);
    stack.push(null);
  }
  return result;
};
// @lc code=end
