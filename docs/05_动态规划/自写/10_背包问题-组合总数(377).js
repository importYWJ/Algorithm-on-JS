// 给你一个由不同整数组成的数nums，和一个目标整数target
// nums 中找出并返回总和为target的元素组合的个数。
var combinationSum4 = function (nums, target) {
  const dp = Array(target + 1).fill(0); // 代表总和为target的组合个数
  dp[0] = 1;
  for (let i = 0; i <= target; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i >= nums[j]) dp[i] += dp[i - nums[j]];
    }
  }
  return dp[target];
};

console.log(combinationSum4([1, 2, 3], 4));
