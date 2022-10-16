/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let left = 0,
    right = k - 1;
  const maxs = [];
  while (right < nums.length) {
    maxs.push(Math.max(...nums.slice(left, right + 1)));
    right++;
    left++;
  }
  return maxs;
};
// @lc code=end
