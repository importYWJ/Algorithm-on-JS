// 1.读取一个整数

let a = readInt();

// 2.读取一行输入(1 2 3 4)

let s = read_line(); //返回值s是一个字符串形式:"1234"

// 将字符串分割成数组元素

let arr1 = s.split(""); //['1','2','3','4']

// 3.输入第一行数字是n，之后跟着n行数据

let n = readInt();
let arr = [];
for (let i = 0; i < n; i++) {
  arr[i] = read_line(); //返回值是一行字符串，需要用split分割
}
arr = arr[i].split(""); //将字符串1234，分割成[1,2,3,4]
