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
// 构建二叉搜索树 : 分治思想, 类似于快速排序
const arr = [-10, -3, 0, 5, 9];
const bt = createTree(arr);

function sortArrayToBST(nums) {
  function buildTree(left, right) {
    if (left > right) return null;
    let mid = Math.floor(left + (right - left) / 2);
    let root = new TreeNode(nums[mid]);
    root.left = buildTree(left, mid - 1);
    root.right = buildTree(mid + 1, right);
    return root;
  }
  return buildTree(0, nums.length - 1);
}

console.log(sortArrayToBST(arr));
