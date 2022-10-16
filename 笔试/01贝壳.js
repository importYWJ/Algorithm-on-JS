// 有一堆单词，里面可能有大写字母或者小写字母。
// 请你先将单词全部转为小写，找出小写单词里面出现最多的一个单词视为关键词，如果这样的单词有多个，那么找出其中字典序最小的一个。
// 两个字符串，大小关系取决于两个字符串从左到右第一个不同字符的 ASCII 值的大小关系。比如a小于b，ah1x小于ahb，acb小于b。

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// const map = new Map();
// rl.on("line", function (data) {
//   data = data.trim().toLowerCase();
//   if (map.has(data)) {
//     map.set(data, map.get(data) + 1);
//   } else {
//     map.set(data, 1);
//   }
// });
const map = new Map();
const data = [
  "10",
  "Nice",
  "to",
  "meet",
  "you",
  "I",
  "can",
  "help",
  "you",
  "thank",
  "you",
];
data.forEach((item) => {
  item = item.trim().toLowerCase();
  if (map.has(item)) {
    map.set(item, map.get(item) + 1);
  } else {
    map.set(item, 1);
  }
});

let maxk = "";
let maxv = -1;
map.forEach((value, key) => {
  // 找出value最大, 一样则选择ascii对比最小的那个
  if (value > maxv) {
    maxv = value;
    maxk = key;
  } else if (value == maxv) {
    let i = 0,
      j = 0;
    while (key[i] == maxk[j]) {
      i++;
      j++;
    }
    if (i != key.length && j != maxk.length) {
      maxk = key[i].charCodeAt() < maxk[j].charCodeAt() ? key : maxk;
    } else if (i == key.length) {
      maxk = key;
    }
  }
});
console.log(maxk + " " + maxv);
