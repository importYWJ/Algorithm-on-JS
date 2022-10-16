/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0,
    right = 0;
  let res = 0;
  const map = {};
  while (right < s.length) {
    let r = s[right];
    right++;
    if (map[r]) {
      map[r]++;
    } else {
      map[r] = 1;
    }
    while (map[r] > 1) {
      const l = s[left];
      map[l]--;
      left++;
    }
    res = Math.max(res, right - left);
  }
  return res;
};
// @lc code=end
