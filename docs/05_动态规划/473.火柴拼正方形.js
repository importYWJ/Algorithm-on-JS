/*
 * @lc app=leetcode.cn id=473 lang=javascript
 *
 * [473] 火柴拼正方形
 */

// @lc code=start
/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
  const sum = matchsticks.reduce((a, b) => a + b);
  if (sum % 4) return false;
  const dp = new Array(sum / 4 + 1).fill(0);
  for (let i = 0; i < matchsticks.length; i++) {
    for (let j = sum / 4; j >= matchsticks[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - matchsticks[i]] + matchsticks[i]);
      if (dp[j] === sum / 4) return true;
    }
  }
  return dp[sum / 4] === sum / 4;
};
// @lc code=end
