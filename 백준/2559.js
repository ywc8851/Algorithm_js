const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let ans = -Infinity;
const [n, k] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);

for (let i = 0; i < n; i++) {
  let cur = 0;
  if (i + k <= n) {
    for (let j = i; j < i + k; j++) {
      cur += nums[j];
    }
  }
  ans = Math.max(ans, cur);
}

if (n === k) {
  ans = nums.reduce((a, b) => a + b);
}
console.log(ans);
