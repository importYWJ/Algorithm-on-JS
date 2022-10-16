function getMax(str) {
  const len = str.length;
  const dp = new Array(len).fill().map((item) => new Array(len).fill(0));
  for (let i = 0; i < len; i++) {
    dp[i][i] = 1;
  }
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      if (str[i] === str[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = dp[i + 1][j] > dp[i][j - 1] ? dp[i + 1][j] : dp[i][j - 1];
      }
    }
  }
  return dp[0][len - 1];
}

const res = getMax(path);
let max = 0;
var path = [];
function backtracking(n, k, used) {
  if (path.length === k) {
    const res = getMax(path.join(""));
    max = max > res ? max : res;
  }
  for (let i = 0; i < k; i++) {
    if (used[i]) continue;
    path.push(n[i]);
    used[i] = true;
    backtracking(n, k, used);
    path.pop();
    used[i] = false;
  }
}
backtracking(line, line.length, []);
console.log(max);
