const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const dp = new Array(n).fill(0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 3;

for (let i = 4; i <= input; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}

console.log(dp[n]);
