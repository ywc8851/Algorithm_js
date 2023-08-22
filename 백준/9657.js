const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const dp = Array.from({ length: 1001 }, () => 0);

dp[1] = 1;
dp[2] = 0;
dp[3] = 1;
dp[4] = 1;
dp[5] = 1;

for (let i = 6; i <= n; i++) {
  if (dp[i - 1] === 0 || dp[i - 3] === 0 || dp[i - 4] === 0) dp[i] = 1;
  else dp[i] = 0;
}

if (dp[n] === 1) console.log("SK");
else console.log("CY");
