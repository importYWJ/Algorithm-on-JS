/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * 此题关键为增加重复元素的剪枝
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const backtracking = (index, sum) => {
    // if (sum > target) return; // 其实可以省略
    if (sum === target) {
      result.push([...path]);
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      if (i > index && candidates[i] === candidates[i - 1]) continue;
      if (target - sum < candidates[i]) break;
      sum += candidates[i];
      path.push(candidates[i]);
      backtracking(i + 1, sum);
      sum -= candidates[i];
      path.pop();
    }
  };
  const result = [],
    path = [];
  candidates.sort((a, b) => a - b);
  backtracking(0, 0);
  return result;
};
// @lc code=end
