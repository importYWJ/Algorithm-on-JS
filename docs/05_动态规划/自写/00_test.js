// // const arr = Array(5).fill();

// // console.log(arr); // 默认undefined

// // const dp = Array(5)
// //   .fill()
// //   .map(() => Array(6).fill(0));
// // console.table(dp);

// // const dp = Array(5)
// //   .fill()
// //   .map(() => {
// //     return Array(7).fill(0);
// //   });
// // console.table(dp);

// // console.log(Math.sum([1, 2, 2, 4353, 45, 56]));
// const m = 5,
//   n = 3;
// const dp = Array(m + 1)
//   .fill()
//   .map(() => Array(n).fill(0));

// // const dp2 = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

// // console.table(dp);
// // console.table(dp2);

// const dp1 = new Array(m).fill(Array(n).fill(0));
// const dp2 = Array(m)
//   .fill()
//   .map((item) => Array(n).fill(0));

// console.table(dp1);
// console.table(dp2);

var isSubsequence = function (s, t) {
  const [len1, len2] = [s.length, t.length];
  const dp = new Array(len1).fill().map(() => Array(len2).fill(0));
  if (s[0] === s[0]) dp[0][0] = 1;
  for (let i = 1; i < len1; i++) {
    if (s[i] === t[0] || dp[i - 1][0]) dp[i][0] = 1;
  }
  for (let j = 1; j < len2; j++) {
    if (t[j] === s[0] || dp[0][j - 1]) dp[0][j] = 1;
  }
  for (let i = 1; i < len1; i++) {
    for (let j = 1; j < len2; j++) {
      if (s[i] === t[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }
  return dp[len1 - 1][len2 - 1];
};

const s = "abc",
  t = "ahbgdc";
console.log(isSubsequence(s, t));
