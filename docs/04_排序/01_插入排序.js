function insertSort(arr) {
  let curr;
  for (let i = 1; i < arr.length; i++) {
    curr = arr[i];
    prev = i - 1;
    while (prev > 0 && curr < arr[prev]) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = curr;
  }
  return arr;
}

const arr = [1, 213, 354, 56, 67, 8, 3, 2, 1, 3, 54];
console.log(insertSort(arr));
