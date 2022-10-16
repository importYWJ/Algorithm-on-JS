/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const dp = new Array(len1).fill().map(() => Array(len2).fill(0));
  for (let i = 0; i < len1; i++) {
    if (nums2[0] === nums1[i]) dp[i][0] = 1;
  }
  for (let j = 0; j < len2; j++) {
    if (nums1[0] === nums2[j]) dp[0][j] = 1;
  }
  for (let i = 1; i < len1; i++) {
    for (let j = 1; j < len2; j++) {
      if (nums1[i] === nums2[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
    }
  }
  const results = dp.map((item) => Math.max(...item));
  return Math.max(...results);
};
// @lc code=end
