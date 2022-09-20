const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const m = +input[1];
const arr = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let left = 0;
let right = arr.length - 1;
let ans = 0;

while (left < right) {
  const sum = arr[left] + arr[right];
  if (sum === m) {
    ans++;
    left++;
  } else if (sum > m) {
    right--;
  } else {
    left++;
  }
}

console.log(ans);
