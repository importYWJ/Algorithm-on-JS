// 1. Array(长度)
const arr = new Array(10)
console.log(arr);

// 2. Array.of(元素)
 const arr1 = Array.of(1, 2, 3, 4)
console.log(arr1);

// 3. Array.from(可迭代对象, 函数)
const arrlike = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  length: 5
}
const arr2 = Array.from(arrlike, (item) => {
  return item + 1
})
console.log(arr2);


// 4. 读写
const a  = []
a[-1.2] = true
console.log(a);