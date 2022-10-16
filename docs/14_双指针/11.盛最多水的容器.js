/*
 * @lc app=leetcode.cn id=11 lang=javascript
 * 对撞指针
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0;
  for (let i = 0, j = height.length - 1; i < j; ) {
    let minL = height[i] > height[j] ? height[j] : height[i];
    maxArea = Math.max(maxArea, minL * (j - i));
    height[i] > height[j] ? j-- : i++;
  }
  return maxArea;
};
// @lc code=end
