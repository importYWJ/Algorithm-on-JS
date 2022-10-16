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
const arr = [1, null, 2, 3];
const bt = createTree(arr);

function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root;
  return left ? left : right;
}

console.log(mergeTree(bt));
