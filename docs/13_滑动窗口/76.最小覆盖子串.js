/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let l = 0,
    r = 0;
  const map = new Map();
  for (const c of t) {
    map.set(c, map.has(c) ? map.get(c) + 1 : 1);
  }
  while (r < s.length) {
    const c = s[r];
    if (map.has(c)) {
      map.set(c, map.get(c) - 1);
      if (map.has())
    }
  }
};
// @lc code=end
