// function getMid(arr) {
//   if (arr.length === 0) return 0;
//   arr.sort();
//   let i = 0,
//     j = arr.length - 1;
//   while (i < j) {
//     i++;
//     j--;
//   }
//   return arr[j];
// }
let arr = [1, 3, 2, 4, 5];
console.log(arr.slice(0, 2));
console.log(arr);
// const n = arr.length;
// let sum = 0;
// for (let i = 0; i < n; i++) {
//   for (let j = i + 1; j <= n; j++) {
//     // sum += getMid(arr.slice(i, j));
//     console.log(arr.slice(i, j), getMid(arr.slice(i, j)));
//   }
// }
// // console.log(sum);
