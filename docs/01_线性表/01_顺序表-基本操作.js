// 1. 初始化表(创建数组)
let arr = new Array("a", "b", "c", "d", "e")
// 2. 求表长
console.log(arr);
// 3. 按值查找
console.log(arr.indexOf("b")); // 从前向后查找(第二个参数指定哪个位置开始搜索)
console.log(arr.lastIndexOf("c")); // 从后向前查找(第二个参数指定哪个位置开始搜索)
console.log(arr.findIndex((item) => {
  return item === "d"
}));
// 4. 删除操作
console.log(arr.splice(2, 1));  // ["c"]
console.log(arr); // ["a", "b", "d", "e"]
// 5. 插入操作
arr = ["a", "b", "c", "d", "e"]
console.log(arr.splice(2, 0, "insert"));
console.log(arr);
// 6. 替换操作
arr = ["a", "b", "c", "d", "e"]  // [ 'a', 'b', 'y', 'y', 'e' ]
console.log(arr.fill("y", 2, 4)); // [ 'a', 'b', 'y', 'y', 'e' ]
console.log(arr);