/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * 有重复元素则需要去重, 去重需要先排序
 * 组合和排列问题是收集叶子节点, 子集问题是收集所有节点
 * 此题剪枝条件相当于: 到某节点, 既和上一节点一样, 且上一个相同节点未使用, 剪枝
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const backtracking = (n, used) => {
    if (path.length === n.length) {
      result.push(Array.from(path));
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && n[i] === n[i - 1] && !used[i - 1]) {
        continue;
      }
      if (used[i]) continue;
      used[i] = true;
      path.push(n[i]);
      backtracking(n, used);
      path.pop();
      used[i] = false;
    }
  };
  const path = [],
    result = [];
  const sortNums = nums.sort((a, b) => a - b);
  backtracking(sortNums, []);
  return result;
};
// @lc code=end
