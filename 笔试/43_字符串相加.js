var multiply = function (num1, num2) {
  const m = num1.length,
    n = num2.length;
  const arr = new Array(m + n).fill(0);
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      arr[i + j + 1] += num1[i] * num2[j];
    }
  }
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] >= 10) {
      arr[i - 1] += Math.floor(arr[i] / 10);
      arr[i] = arr[i] % 10;
    }
  }
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 && arr[i] === 0) continue;
    result += arr[i];
  }
  console.log(result);
};

// multiply("456", "23");
// multiply("2", "3");
console.log("a" < "b");
