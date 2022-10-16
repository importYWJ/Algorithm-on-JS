const input_array = "2 1 4 3 6 5 0 7 3";
const arr = input_array.split(" ");
const k = arr.pop();
const length = arr.length;
let win_count = 1;
while (win_count != k) {
  if (arr[0] > arr[1]) {
    win_count++;
    const a0 = arr.shift();
    arr.push(arr.shift());
    arr.unshift(a0);
  } else {
    win_count = 1;
    arr.push(arr.shift());
  }
}
console.log(arr[0]);
