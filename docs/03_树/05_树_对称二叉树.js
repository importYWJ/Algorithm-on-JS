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
// 验证二叉搜索树
const arr1 = [5, 4, 6, null, null, 3, 7];
const bt1 = createTree(arr1);
const arr2 = [5, 4, 6, null, null, 3, null];
const bt2 = createTree(arr2);

function isSymmetric(root) {
  function isEqual(left, right) {
    // 终止递归条件
    if (left === null && right === null) return true; // 左右都null, 对称
    if (left === null || right === null) return false;
    return (
      left.val === right.val &&
      isEqual(left.left, right.right) &&
      isEqual(left.right, right.left)
    );
  }
  if (root === null) return true;
  return isEqual(root.left, root.right);
}

console.log(isSymmetric(bt1, bt2));
