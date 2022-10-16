/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let pos = 0;
  while (preorder[0] !== inorder[pos]) pos++;
  // const l_pre = preorder.slice(1, pos + 1),
  //   r_pre = preorder.slice(pos + 1),
  //   l_in = inorder.slice(0, pos),
  //   r_in = inorder.slice(pos + 1);
  const l_pre = [],
    l_in = [],
    r_pre = [],
    r_in = [];
  for (let i = 0; i < pos; i++) {
    l_pre.push(preorder[i + 1]);
    l_in.push(inorder[i]);
  }
  for (let i = pos + 1; i < preorder.length; i++) {
    r_pre.push(preorder[i]);
    r_in.push(inorder[i]);
  }
  const node = new TreeNode(preorder[0]);
  node.left = buildTree(l_pre, l_in);
  node.right = buildTree(r_pre, r_in);
  return node;
};
// @lc code=end
