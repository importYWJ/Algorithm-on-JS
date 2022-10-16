/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permute = function (nums) {
//   const backtracking = (used) => {
//     if (path.length === nums.length) {
//       result.push([...path]);
//       return;
//     }
//     for (let i = 0; i < nums.length; i++) {
//       if (used[i]) continue;
//       used[i] = true;
//       path.push(nums[i]);
//       backtracking(used);
//       used[i] = false;
//       path.pop();
//     }
//   };
//   const result = [],
//     path = [];
//   backtracking([]);
//   return result;
// };

var permute = function (nums) {
  function backtracking(used) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      path.push(nums[i]);
      used[i] = true;
      backtracking(used);
      path.pop();
      used[i] = false;
    }
  }
  const result = [],
    path = [];
  backtracking([]);
  return result;
};
// @lc code=end
