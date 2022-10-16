const arr = [1, 5, 2, 4, 3];

function length_of_LIS(nums) {
  function L(num, i) {
    if (i === num.length - 1) return 1;
    max_len = 1;
    for (let j = i + 1; j < num.length; j++) {
      if (num[j] > num[i]) {
        max_len = Math.max(max_len, L(num, j) + 1);
      }
    }
    return max_len;
  }
  const result = [];
  for (let index = 0; index < arr.length; index++) {
    result.push(L(nums, index));
  }
  console.log(result);
  return Math.max(...result);
}

// 动态规划: 记忆化搜索、空间换时间、带备忘录的递归、
function length_of_LIS(nums) {
  const memo = {};
  function L(num, i) {
    if (i in memo) {
      return memo[i];
    }
    if (i === num.length - 1) return 1;
    max_len = 1;
    for (let j = i + 1; j < num.length; j++) {
      if (num[j] > num[i]) {
        max_len = Math.max(max_len, L(num, j) + 1);
      }
    }
    memo[i] = max_len;
    return max_len;
  }
  const result = [];
  for (let index = 0; index < arr.length; index++) {
    result.push(L(nums, index));
  }
  console.log(result);
  return Math.max(...result);
}

console.log(length_of_LIS(arr));
