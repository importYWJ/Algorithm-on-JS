var findTargetSumWays = function (nums, target) {
  const sum = nums.reduce((p, v) => p + v);
  if (Math.abs(target) > sum) return 0;
  if ((sum + target) & 1) return 0;
  const bagSize = (sum + target) / 2;
  const dp = Array(bagSize + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = bagSize; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]];
    }
  }
  return dp[bagSize];
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
