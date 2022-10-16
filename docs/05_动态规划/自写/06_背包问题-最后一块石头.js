var lastStoneWeightII = function (stones) {
  // 1. 确认dp数组下标及含义
  // 2. 确认递推公式
  const sum = stones.reduce((p, v) => p + v);
  const target = Math.floor(sum / 2);
  const dp = Array(target + 1).fill(0);
  for (let i = 0; i < stones.length; i++) {
    for (let j = target; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
    }
  }
  return sum - dp[target] - dp[target];
};

stones = [2, 7, 4, 1, 8, 1];
console.log(lastStoneWeightII(stones));
