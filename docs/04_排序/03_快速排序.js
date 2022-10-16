function quickSort(arr, low, high) {
  if (arr.length <= 1) return arr;
  let left = [],
    right = [],
    pivot = arr.shift();
  for (let value of arr) {
    if (value > pivot) {
      right.push(value);
    } else {
      left.push(value);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}
