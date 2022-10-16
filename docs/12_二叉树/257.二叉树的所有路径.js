/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 */

// @lc code=start
/**
 * dfs | 前序 | 回溯
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const getPath = function (node, path) {
    if (node && !node.left && !node.right) {
      path.push(node.val);
      result.push(path.join("->"));
      return;
    }
    path.push(node.val);
    if (node.left) {
      getPath(node.left, path);
      path.pop();
    }
    if (node.right) {
      getPath(node.right, path);
      path.pop();
    }
  };
  const result = [],
    path = [];
  getPath(root, path);
  return result;

  //1. 确定递归函数 函数参数
  // const getPath = function (node, curPath) {
  //   //2. 确定终止条件，到叶子节点就终止
  //   if (node.left === null && node.right === null) {
  //     curPath += node.val;
  //     res.push(curPath);
  //     return;
  //   }
  //   //3. 确定单层递归逻辑
  //   curPath += node.val + "->";
  //   node.left && getPath(node.left, curPath);
  //   node.right && getPath(node.right, curPath);
  // };
  // const res = [];
  // getPath(root, "");
  // return res;
};
// @lc code=end
