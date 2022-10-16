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

const arr = [3, 9, 20, null, null, 15, 7];
const bt = createTree(arr);

function isBalanced(root) {
  function getDepth(root) {
    if (!root) return 0;
    return Math.max(getDepth(root.left), getDepth(root.right)) + 1;
  }
  if (!root) return true;
  if (Math.abs(getDepth(root.left) - getDepth(root.right)) > 1) return false;
  return isBalanced(root.left) && isBalanced(root.right);
}

console.log(isBalanced(bt));
