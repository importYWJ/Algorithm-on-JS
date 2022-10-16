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
const arr = [5, 4, 6, null, null, 3, 7];
const bt = createTree(arr);

function levelOrder(root) {
  const queue = [root];
  const res = [];
  while (queue.length > 0) {
    let node = queue.shift();
    res.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return res;
}

function levelOrder1(root) {
  if (!root) return [];
  const queue = [root];
  const res = [];
  while (queue.length > 0) {
    let len = queue.length;
    let arr = [];
    while (len > 0) {
      let node = queue.shift();
      arr.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      len--;
    }
    res.push(arr);
  }
  return res;
}

console.log(levelOrder1(bt));
