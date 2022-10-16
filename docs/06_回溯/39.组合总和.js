/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const backtracking = (index, sum) => {
    if (sum === target) {
      result.push([...path]);
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      const n = candidates[i];
      if (target - sum < n) break;
      sum += n;
      path.push(n);
      backtracking(i, sum);
      sum -= n;
      path.pop();
    }
  };
  const result = [],
    path = [];
  candidates.sort((a, b) => a - b); // 用以成功剪枝
  backtracking(0, 0);
  return result;
};
// @lc code=end
