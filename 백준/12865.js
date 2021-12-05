const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let items = new Array(n + 1);
for (let i = 0; i < items.length; i++) {
  items[i] = new Array(2);
}
for (let i = 1; i <= n; i++) {
  items[i] = input[i].split(" ").map(Number);
}
let dp = new Array(n + 1);
for (let i = 0; i < dp.length; i++) {
  dp[i] = new Array(k + 1).fill(0);
}
for (let i = 1; i <= n; i++) {
  let weight = items[i][0];
  let value = items[i][1];
  for (let j = 0; j <= k; j++) {
    if (j < weight) {
      dp[i][j] = dp[i - 1][j];
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight] + value);
    }
  }
}
console.log(dp[n][k]);
