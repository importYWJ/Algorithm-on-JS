/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const backtracking = (index) => {
    result.push([...path]);
    for (let i = index; i < nums.length; i++) {
      path.push(nums[i]);
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
