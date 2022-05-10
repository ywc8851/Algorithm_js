const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const arr = input.shift().split(" ").map(Number);
const dp = Array.from({ length: N + 1 }, () => 0);

const ans = arr.map((num, idx) => {
  let dpMax = 0;
  for (let i = 0; i < idx; i++) {
    if (arr[i] >= num) continue;

    dpMax = Math.max(dp[i + 1], dpMax);
  }
  return (dp[idx + 1] = dpMax + 1);
});

console.log(Math.max(...ans));
