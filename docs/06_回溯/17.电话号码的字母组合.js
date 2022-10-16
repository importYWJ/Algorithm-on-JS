/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  const backtracking = (n, index) => {
    if (n.length === 0) return [];
    if (path.length === n.length) {
      result.push(path.join(""));
      return;
    }
    for (const s of map[n[index]]) {
      path.push(s);
      backtracking(n, index + 1);
      path.pop();
    }
  };
  const result = [],
    path = [];
  backtracking(digits, 0);
  return result;
};
// @lc code=end
