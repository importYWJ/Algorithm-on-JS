const [a, b, k, v] = [10, 3, 2, 2];
let fullbox = Math.floor(b / (k - 1));
const fullnum = fullbox * k * v;
console.log("fullbox fullNUM ", fullbox, fullnum);
console.log("a ", a);
let result = 0;
if (a <= fullnum) {
  if (a % (k * v) == 0) {
    result = a / (k * v);
  } else {
    result = Math.floor(a / (k * v)) + 1;
  }
} else {
  const res_b = (b % (k - 1)) + 1;
  // 再加一个半隔板
  if (a <= fullnum + res_b * v) {
    result = fullbox + 1;
  } else {
    // 隔板不够
    const res_a = a - (fullnum + res_b * v);
    if (res_a % v == 0) {
      result = fullbox + 1 + res_a / v;
    } else {
      result = fullbox + 1 + Math.floor(res_a / v) + 1;
    }
  }
}
console.log(result);
