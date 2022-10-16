/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let len = nums.length;
  const res = Array(len).fill(0);
  let i = 0,
    j = len - 1,
    k = len - 1;
  let left = 0,
    right = 0;
  while (i <= j) {
    left = nums[i] * nums[i];
    right = nums[j] * nums[j];
    if (left < right) {
      res[k--] = right;
      j--;
    } else {
      res[k--] = left;
      i++;
    }
  }
  return res;
};
// @lc code=end
