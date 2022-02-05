const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let arr = input[1].split(" ").map(Number);
let cur = 0;
let ans = -Infinity;
for (let i = 0; i < arr.length; i++) {
  if (cur + arr[i] > 0) {
    ans = Math.max(ans, cur + arr[i]);
    cur = cur + arr[i];
  } else {
    cur = 0;
  }
}
if (ans < 0) {
  ans = Math.max(...arr);
}
console.log(ans);
