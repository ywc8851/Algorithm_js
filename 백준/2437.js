const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let ans = 0;
for (let i = 0; i < n; i++) {
  if (arr[i] > ans + 1) {
    break;
  }
  ans += arr[i];
}

console.log(ans + 1);
