/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 */

// @lc code=start
/**
 * 注意点: 1.需要遍历所有节点, 则不return; 2、去重方案: 同一父节点下使用过的元素去重, 而不只是相邻
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const backtracking = (index) => {
    if (path.length >= 2) {
      result.push([...path]);
      // return;
    }
    const used = [];
    for (let i = index; i < nums.length; i++) {
      if (nums[i] < path[path.length - 1] || used.includes(nums[i])) continue;
      used.push(nums[i]);
      path.push(nums[i]);
      backtracking(i + 1);
      path.pop();
    }
  };
  const result = [],
    path = [];
  backtracking(0);
  return result;
};
// @lc code=end
