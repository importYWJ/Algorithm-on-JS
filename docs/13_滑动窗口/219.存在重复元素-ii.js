/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  if (k <= 0) return false;
  let left = 0,
    right = 1;
  const set = new Set();
  set.add(nums[0]);
  while (right < nums.length) {
    while (right - left > k) {
      set.delete(nums[left++]);
    }
    if (set.has(nums[right])) return true;
    set.add(nums[right]);
    right++;
  }
  return false;
};
// @lc code=end
