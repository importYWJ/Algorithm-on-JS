/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
const isPlaindrome = function (s, l, r) {
  for (let i = l, j = r; i < j; i++, j--) {
    if (s[i] !== s[j]) return false;
  }
  return true;
};

var partition = function (s) {
  const backtracking = (index) => {
    if (index >= s.length) {
      result.push([...path]);
      return;
    }
    for (let i = index; i < s.length; i++) {
      if (!isPlaindrome(s, index, i)) continue;
      path.push(s.slice(index, i + 1));
      backtracking(i + 1);
      path.pop();
    }
  };
  const result = [],
    path = [];
  backtracking(0);
  return result;
};
// @lc code=end
