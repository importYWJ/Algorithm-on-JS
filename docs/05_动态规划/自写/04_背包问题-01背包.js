function testWeightBagProblem_2d(weight, value, size) {
  const len = weight.length;
  const dp = Array(len)
    .fill()
    .map(() => {
      return Array(size + 1).fill(0);
    });
  // 初始化
  for (let j = weight[0]; j <= size; j++) {
    dp[0][j] = value[0];
  }
  // 遍历顺序
  for (let i = 1; i < len; i++) {
    for (let j = 0; j <= size; j++) {
      if (j < weight[i]) dp[i][j] = dp[i - 1][j];
      else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
      }
    }
  }
  console.table(dp);
  return dp[len - 1][size];
}

function testWeightBagProblem_1d(wight, value, size) {
  const len = wight.length,
    dp = Array(size + 1).fill(0);
  for (let i = 1; i <= len; i++) {
    for (let j = size; j >= wight[i - 1]; j--) {
      dp[j] = Math.max(dp[j], value[i - 1] + dp[j - wight[i - 1]]);
    }
  }
  return dp[size];
}

function test() {
  console.log(testWeightBagProblem_2d([1, 3, 4, 5], [15, 20, 30, 55], 6));
}

test();
