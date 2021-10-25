const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let N = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

const dp = Array.from({ length: N - 1 }, () => new Array(21).fill(BigInt(0)));

dp[0][numbers[0]] = BigInt(1);
for (let i = 1; i < N - 1; i++) {
  for (let j = 0; j <= 20; j++) {
    if (dp[i - 1][j]) {
      if (j + numbers[i] <= 20) dp[i][j + numbers[i]] += dp[i - 1][j];
      if (j - numbers[i] >= 0) dp[i][j - numbers[i]] += dp[i - 1][j];
    }
  }
}
console.log(dp[N - 2][numbers[N - 1]].toString());
