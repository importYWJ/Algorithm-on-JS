const [str, start, end] = ["abcdefg b f"];
const str_arr = str.split("");
let i = 0;
let j = str.length - 1;
while (i < str.length && str[i] !== start) i++;
while (j >= 0 && str[j] !== end) j--;
if (i >= str.length && j >= 0) {
  i = 0;
} else if (i < str.length && j < 0) {
  j = str.length - 1;
}
while (i < j) {
  const tmp = str_arr[i];
  str_arr[i] = str_arr[j];
  str_arr[j] = tmp;
  i++;
  j--;
}
console.log(str_arr.join(""));
