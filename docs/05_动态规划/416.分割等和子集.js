/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const sum = nums.reduce((p, v) => p + v);
  if (sum & 1) return false;
  const dp = new Array(nums.length)
    .fill()
    .map(() => Array(sum / 2 + 1).fill(0));
  for (let j = nums[0]; j <= sum / 2; j++) {
    dp[0][j] = nums[0];
  }
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j <= sum / 2; j++) {
      if (j < nums[i]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - nums[i]] + nums[i]);
      }
      if (dp[i][j] === sum / 2) return true;
    }
  }
  return dp[nums.length - 1][sum / 2] === sum / 2;
};
// @lc code=end
