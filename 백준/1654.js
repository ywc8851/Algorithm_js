const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input.shift().split(" ").map(Number);
const arr = input.map(i => +i);
let left = 0;
let right = Math.max(...arr);
let ans = 0;

while (left <= right) {
  const mid = parseInt((left + right) / 2);
  let cnt = 0;

  arr.forEach(e => (cnt += Math.floor(e / mid)));
  if (cnt >= k) {
    ans = Math.max(ans, mid);
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(ans);
