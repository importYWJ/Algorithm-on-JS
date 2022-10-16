function maxSubArray(nums) {
  const dp = [...nums];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= 0) {
      dp[i] = dp[i - 1];
    } else {
      let sum = nums.slice(0, i + 1).reduce((p, v) => p + v);
      console.log(sum);
      dp[i] = sum;
      for (let j = 0; j < i; j++) {
        sum -= nums[j];
        dp[i] = Math.max(dp[i], sum);
      }
    }
  }
  console.log(dp);
}

maxSubArray([-3, 2, -4, 5, -1, 3, 1, -6, 3]);
