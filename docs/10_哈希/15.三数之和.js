/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const len = nums.length,
    res = [];
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) return res;
    if (nums[i] === nums[i - 1]) continue;
    let l = i + 1,
      r = len - 1,
      target = 0 - nums[i];
    while (l < r) {
      const twoSum = nums[l] + nums[r];
      if (twoSum < target) {
        l++;
      } else if (twoSum > target) {
        r--;
      } else {
        res.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r === nums[r - 1]]) r--;
        l++;
        r--;
      }
    }
  }
  return res;
};
// @lc code=end
