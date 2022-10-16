/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * 此题在字符串切割的基础上, 新增终止条件: 传入index === s.length, 该条件下可反推得到path最后一个刚好取完s
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const backtracking = (index) => {
    if (path.length > 4) return;
    if (path.length === 4 && index === s.length) {
      result.push(path.join("."));
      return;
    }
    for (let i = index; i <= s.length; i++) {
      const str = s.slice(index, i + 1);
      if (str > 255) break;
      if (str[0] === "0" && str.length > 1) break;
      path.push(str);
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
