const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function isSameArray(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
    else continue;
  }
  return true;
}
let a = input[0].trim().split("");
let b = input[1].trim().split("");
let ans = 0;
while (1) {
  if (a.length === b.length) {
    if (isSameArray(a, b)) ans = 1;
    break;
  }
  if (b[b.length - 1] === "A") b.pop();
  else {
    b.pop();
    b.reverse();
  }
}

console.log(ans);
