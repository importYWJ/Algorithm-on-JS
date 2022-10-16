const path = [1, 2, 3, 4, 5, 6, 7];
const result = [];
result.push([...path]);
console.log(result);

const path1 = [1, 2, 5, 4, 9, 6, 7];
const res = path1.sort((a, b) => a - b);
console.log(res.length);

let n = 4;
// const chessboard = Array(n)
//   .fill([])
//   .map(() => new Array(n).fill("."));
// console.log(chessboard.map((arr) => console.log(arr)));

let arr = [".", ".", ".", "."];
console.log(arr.join);

let a = (b = c = 1);
c = 2;
console.log(a, b, c);

console.log(0.111111111111111 + 0.000000000000009);
console.log(0.1 + 0.2);
