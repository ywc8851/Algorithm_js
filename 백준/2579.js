const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const arr = input.map(Number);
const dp = Array.from({ length: n }, () => 0);
dp[0] = arr[0];
dp[1] = arr[0] + arr[1];
dp[2] = Math.max(arr[0], arr[1]) + arr[2];

for (let i = 3; i < n; i++) {
  dp[i] = Math.max(dp[i - 2] + arr[i], arr[i - 1] + arr[i] + dp[i - 3]);
}

console.log(dp[n - 1]);
