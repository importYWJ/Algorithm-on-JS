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

// DFS
function maxDepth(root) {
  if (!root) return 0;
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  return Math.max(left, right) + 1;
}

function maxDepth1(root) {
  let maxDepth = 0;
  if (!root) return maxDepth;
  const queue = [root];
  while (queue.length > 0) {
    let len = queue.length;
    while (len--) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    maxDepth++;
  }
  return maxDepth;
}

console.log(maxDepth1(bt));
