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
// 后序遍历
const arr = [1, null, 2, 3];
const bt = createTree(arr);

function postorder(root) {
  const result = [];
  function pushRoot(node) {
    if (node) {
      if (node.left) pushRoot(node.left);
      if (node.right) pushRoot(node.right);
      result.push(node.val);
    }
  }
  pushRoot(root);
  return result;
}

console.log(postorder(bt));
