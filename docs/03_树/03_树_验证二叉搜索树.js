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
const arr = [5, 4, 6, null, null, 3, 7];
const bt = createTree(arr);

function isValidBST(root) {
  let result = true;
  let prev = -Infinity;
  function inorder(root) {
    if (root) {
      if (root.left) inorder(root.left);
      if (root.val <= prev) {
        result = false;
        return;
      } else {
        prev = root.val;
      }
      if (root.right) inorder(root.right);
    }
  }
  inorder(root);
  return result;
}

console.log(isValidBST(bt));
