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

/**
 * Encodes a tree to a single string.
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const result = [];
  function dfs(node) {
    if (!node) {
      result.push(null);
      return;
    }
    result.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  function dfs() {
    if (data.length === 0) return null;
    let val = data.shift();
    if (val === null) return null;
    let node = new TreeNode(val);
    node.left = dfs();
    node.right = dfs();
    return node;
  }
  dfs();
};

console.log(serialize(bt));
