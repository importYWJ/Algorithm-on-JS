const line = "?12?0?9??";
let result = line.split("");

for (let i = 0; i < result.length - 1; i++) {
  if (result[i] !== "?") continue;
  if (i === 0) {
    if (result[1] !== "1") result[0] = "1";
    if (result[1] === "1") result[0] = "2";
  } else {
    if (result[i - 1] !== "0" && result[i + 1] !== "0") {
      result[i] = "0";
    } else if (result[i - 1] === "0" && result[i + 1] === "0") {
      result[i] = "1";
    } else if (result[i - 1] === "1" || result[i + 1] === "1") {
      result[i] = "2";
    } else {
      result[i] = "1";
    }
  }
}
if (result[result.length - 1] === "?") {
  if (result[result.length - 2] === "0") {
    result[result.length - 1] = "1";
  } else {
    result[result.length - 1] = "0";
  }
}
let index = 0;
let sum = 0;
for (let i = 0; i < line.length; i++) {
  if (line[i] === "?") index = i;
  sum += parseInt(result[i]);
}
const add = sum % 3;
result[index] = (parseInt(result[index]) + add).toString();
console.log(result.join(""));
