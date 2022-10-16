var rob = function (nums) {
  // dp[i]: 考虑0-i户的最大价值
  const len = nums.length;
  dp = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[len - 1];
};

console.log(rob([2, 7, 9, 3, 1]));
