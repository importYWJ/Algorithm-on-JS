const arr = new Array(5).fill(1)

// 1.入栈(数组尾部)
console.log(arr.push(...[2, 3]));  // 返回新长度
// 2. 出栈(数组尾部)
console.log(arr.pop());  // 返回出栈值
console.log(arr.pop());  // 返回出栈值

console.log(arr);

// 3. 入队(数组头部)
console.log(arr.unshift(...[2, 3]));  // 返回新长度
// 4. 出队(数组头部)
console.log(arr.shift());
console.log(arr.shift());

console.log(arr);