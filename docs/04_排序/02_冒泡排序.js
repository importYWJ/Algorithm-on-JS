function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let flag = false;
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        flag = true;
      }
    }
    if (!flag) break;
  }
  return arr;
}

const arr = [1, 213, 354, 56, 67, 8, 3, 2, 1, 3, 54];
console.log(bubbleSort(arr));

// [1, 213, 354, 56, 67, 8, 3, 2, 1, 3, 54]
// [1, 1, 213, 354, 56, 67, 8, 3, 2, 3, 54]
// [1, 1, 2, 213, 354, 56, 67, 8, 3, 3, 54]
// ...
