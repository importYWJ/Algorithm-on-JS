/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const [len1, len2] = [text1.length, text2.length];
  const dp = new Array(len1).fill().map(() => new Array(len2).fill(0));
  if (text1[0] === text2[0]) dp[0][0] = 1;
  for (let i = 1; i < len1; i++) {
    if (text2[0] === text1[i] || dp[i - 1][0] === 1) dp[i][0] = 1;
  }
  for (let j = 1; j < len2; j++) {
    if (text1[0] === text2[j] || dp[0][j - 1] === 1) dp[0][j] = 1;
  }
  for (let i = 1; i < len1; i++) {
    for (let j = 1; j < len2; j++) {
      if (text1[i] === text2[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[len1 - 1][len2 - 1];
};
// @lc code=end
