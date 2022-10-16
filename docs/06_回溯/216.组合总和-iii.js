/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * 剪枝条件: 1. sum的限定为k; 2. index选取个数限制 i <= n - (k - path.length) + 1
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

// 非剪枝版本
/**
var combinationSum3 = function (k, n) {
  const backtracking = (k, n, start) => {
    if (path.length === k) {
      const sum = path.reduce((a, b) => a + b);
      if (sum === n) result.push([...path]);
      return;
    }
    for (let i = start; i <= 9 - (k - path.length) + 1; i++) {
      path.push(i);
      backtracking(k, n, i + 1);
      path.pop();
    }
  };
  let path = [],
    result = [];
  backtracking(k, n, 1);
  return result;
};
 */
var combinationSum3 = function (k, n) {
  const backtracking = (sum, start) => {
    if (path.length === k) {
      // const sum = path.reduce((a, b) => a + b);
      if (sum === n) result.push([...path]);
      return;
    }
    for (let i = start; i <= 9 - (k - path.length) + 1; i++) {
      sum += i;
      path.push(i);
      backtracking(sum, i + 1);
      path.pop();
      sum -= i;
    }
  };
  let path = [],
    result = [];
  backtracking(0, 1);
  return result;
};
// @lc code=end
