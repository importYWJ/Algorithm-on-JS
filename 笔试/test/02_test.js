var __readline = require("readline-sync");
__readline.setDefaultOptions({ prompt: "" });
var read_line = __readline.prompt;

let pre, mid;
const post = function (preorder, inorder, root, start, end) {
  if (start > end) return;
  let index = start;
  while (index < end && preorder[root] !== inorder[index]) index++;
  post(preorder, inorder, root + 1, start, index - 1);
  post(root + 1 + index - start, index + 1, end);
  console.log(pre[root]);
};

// while ((pre = read_line()) != "" && (mid = read_line()) != "") {
//   pre = pre.trim();
//   mid = mid.trim();
//   post(pre, mid, 0, 0, mid.length - 1);
// }

post("ABC", "BAC", 0, 0, 2);
