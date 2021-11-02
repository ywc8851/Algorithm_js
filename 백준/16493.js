const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);

let arr = new Array(m + 1).fill(new Array(2));
let dp = new Array(21);
for (let i = 0; i < dp.length; i++) {
  dp[i] = new Array(201).fill(0);
}
for (let i = 1; i < m + 1; i++) {
  arr[i] = input[i].split(" ").map(Number);
}
for (let i = 1; i <= m; i++) {
  for (let j = 0; j <= n; j++) {
    if (j - arr[i][0] >= 0) {
      dp[i][j] = Math.max(dp[i - 1][j - arr[i][0]] + arr[i][1], dp[i - 1][j]);
    }
    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j]);
  }
}
console.log(dp[m][n]);
