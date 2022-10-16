/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const sign = Math.sign(x);
  let x_arr = Math.abs(x).toString().split("");
  let i = 0,
    j = x_arr.length - 1;
  while (i < j) {
    let tmp = x_arr[i];
    x_arr[i] = x_arr[j];
    x_arr[j] = tmp;
    i++;
    j--;
  }
  const result = sign * x_arr.join("");
  const max = Math.pow(2, 31) - 1;
  const min = -Math.pow(2, 31);
  if (result < min || result > max) return 0;
  return result;
};
// @lc code=end
