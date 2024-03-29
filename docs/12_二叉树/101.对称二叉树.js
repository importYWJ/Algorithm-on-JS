/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;
  const compare = function (left, right) {
    if ((!left && right) || (left && !right)) return false;
    if (!left && !right) return true;
    if (left.val !== right.val) return false;
    let outSide = compare(left.left, right.right);
    let inSide = compare(left.right, right.left);
    return inSide && outSide;
  };
  return compare(root.left, root.right);
};
// @lc code=end
