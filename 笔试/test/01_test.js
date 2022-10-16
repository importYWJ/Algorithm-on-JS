// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// 单行输入
// rl.on("line", function (line) {
//   let parameters = line.split(" ");
//   let a = parseInt(parameters[0]); // 单行第一个参数 转化成了数字
//   let b = parseInt(parameters[1]); // 单行第二个参数 转化成了数字
//   console.log(a + b);
// });

// 多行输入
// let first_line = readline();
// let inputs = [];
// while ((line = readline())) {
//   inputs.push(line);
// }

// 多行不固定输入
process.stdin.resume();
process.stdin.setEncoding("ascii");

var input = "";
var input_array = "";

process.stdin.on("data", function (data) {
  input += data;
});

process.stdin.on("end", function () {
  input_array = input.split("\n"); //示例代码
  var len = input_array.length;
  var result = [];
  for (var i = 0; i < len; i++) {
    var temp = input_array[i].trim().split(" ");
    for (var j = 0; j < temp.length; j++) {
      if (temp[j] !== "" && result.indexOf(temp[j]) == -1) {
        result.push(temp[j]);
      }
    }
  }
  console.log(result.length);
});

// var __readline = require("readline-sync");
// __readline.setDefaultOptions({ prompt: "" });
// var read_line = __readline.prompt;

// let N, M;
// while ((N = readInt()) && (M = readInt())) {
//   for (let i = 0; i < M; i++) {
//     let a = readInt();
//     let b = readInt();
//     let c = readInt();
//     console.log(a, b, c);
//   }
// }
