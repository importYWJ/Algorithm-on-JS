/*
 * @lc app=leetcode.cn id=1035 lang=javascript
 *
 * [1035] 不相交的线
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function (nums1, nums2) {
  const [len1, len2] = [nums1.length, nums2.length];
  const dp = new Array(len1).fill().map(() => Array(len2).fill(0));
  if (nums1[0] === nums2[0]) dp[0][0] = 1;
  for (let i = 1; i < len1; i++) {
    if (nums1[i] === nums2[0] || dp[i - 1][0] === 1) dp[i][0] = 1;
  }
  for (let j = 1; j < len2; j++) {
    if (nums1[0] === nums2[j] || dp[0][j - 1] === 1) dp[0][j] = 1;
  }
  for (let i = 1; i < len1; i++) {
    for (let j = 1; j < len2; j++) {
      if (nums1[i] === nums2[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }
  return dp[len1 - 1][len2 - 1];
};
// @lc code=end
