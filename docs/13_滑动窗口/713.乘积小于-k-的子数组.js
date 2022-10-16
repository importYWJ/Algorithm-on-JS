/*
 * @lc app=leetcode.cn id=713 lang=javascript
 *
 * [713] 乘积小于 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let left = 0,
    right = 0;
  let count = 0;
  while (right < nums.length) {
    const r = nums[right];
    right++;
    let result = nums.slice(left, right + 1).reduce((p, v) => p * v);
    if (result < k) count++;
    while (result >= k) {
      result = result / nums[left];
      left--;
      if (result < k) count++;
    }
  }
  return count;
};
// @lc code=end
