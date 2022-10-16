/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * // 向右不断遍历, 向右扩展找到最小满足条件下标，若长度最小，则保存
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  const len = nums.length;
  let l = (r = sum = 0);
  let res = len + 1;
  while (r < len) {
    sum += nums[r++];
    while (sum >= target) {
      res = res < r - l ? res : r - l;
      sum -= nums[l++];
    }
  }
  return res > len ? 0 : res;
};
// var minSubArrayLen = function (target, nums) {
//   const len = nums.length;
//   let l = (r = sum = 0);
//   let res = len + 1;
//   while (l < len) {
//     sum = 0;
//     r = l;
//     while (r < len) {
//       sum += nums[r++];
//       if (sum >= target) {
//         res = r - l < res ? r - l : res;
//         break;
//       }
//     }
//     l++;
//   }
//   return res > len ? 0 : res;
// };
// @lc code=end
