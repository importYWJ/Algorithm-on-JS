// dp[i][j]: 最多有i个0和j个1的strs的最大子集的大小为dp[i][j]。
// 最大子集中最多有m个0和n个1。
var findMaxForm = function (strs, m, n) {
  const dp = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  let zeroNum, oneNum;
  for (let str of strs) {
    zeroNum = 0;
    oneNum = 0;
    for (let c of str) {
      if (c === "0") {
        zeroNum++;
      } else {
        oneNum++;
      }
    }
    for (let i = m; i >= zeroNum; i--) {
      for (let j = n; j >= oneNum; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1);
      }
    }
  }
  return dp[m][n];
};

const strs = ["10", "0001", "111001", "1", "0"],
  m = 5,
  n = 3;
console.log(findMaxForm(strs, m, n));
