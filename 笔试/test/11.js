const num = parseInt("54054");
const max = num.toString(2).length;
function foo(x) {
  let count = 0;
  const x2 = x.toString(2);
  for (const s of x2) {
    if (s === "1") count++;
  }
  return count;
}
const result = [];
let a = 1;
while (a < max) {
  if (parseInt(new Array(a).fill(1).join(""), 2) > num) break;
  const b = num / a;
  if (num % a === 0 && foo(b) === a) {
    result.push(b);
  }
  a++;
}
console.log(result.length);
console.log(result.join(" "));
