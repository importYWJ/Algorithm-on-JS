/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const [len1, len2] = [s.length, t.length];
  if (!len1) return true;
  const dp = new Array(len1).fill().map(() => Array(len2).fill(0));
  if (s[0] === t[0]) dp[0][0] = 1;
  for (let i = 1; i < len1; i++) {
    if (s[i] === t[0] || dp[i - 1][0]) dp[i][0] = 1;
  }
  for (let j = 1; j < len2; j++) {
    if (t[j] === s[0] || dp[0][j - 1]) dp[0][j] = 1;
  }
  for (let i = 1; i < len1; i++) {
    for (let j = 1; j < len2; j++) {
      if (s[i] === t[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }
  return dp[len1 - 1][len2 - 1] === len1 ? true : false;
};
// @lc code=end
