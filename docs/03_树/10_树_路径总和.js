function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function createTree(arr) {
  let levels = arr;
  const root = new TreeNode();
  let currentNode = root;
  currentNode.val = levels.shift();
  while (levels.length !== 0) {
    currentNode.left = levels[0]
      ? new TreeNode(levels.shift())
      : levels.shift();
    currentNode.right = levels[0]
      ? new TreeNode(levels.shift())
      : levels.shift();
    if (currentNode.left) {
      currentNode = currentNode.left;
    } else if (currentNode.right) {
      currentNode = currentNode.right;
    }
  }
  return root;
}
// 构建二叉搜索树
const arr = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];
const bt = createTree(arr);

function hasPathSum(root, targetnum) {
  if (root === null) return false;
  if (root.left === null && root.right === null) {
    return root.val === targetnum;
  }
  return (
    hasPathSum(root.left, targetnum - root.val) ||
    hasPathSum(root.right, targetnum - root.val)
  );
}

console.log(hasPathSum(bt));
