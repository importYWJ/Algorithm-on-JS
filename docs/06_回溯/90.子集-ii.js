/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const backtracking = (index, sortNums) => {
    result.push([...path]);
    for (let i = index; i < sortNums.length; i++) {
      if (i > index && sortNums[i] === sortNums[i - 1]) continue;
      path.push(sortNums[i]);
      backtracking(i + 1, sortNums);
      path.pop();
    }
  };
  const result = [],
    path = [];
  const sortNums = nums.sort((a, b) => a - b);
  backtracking(0, sortNums);
  return result;
};
// @lc code=end
