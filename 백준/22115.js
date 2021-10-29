const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let coffee = new Array(n);
coffee = input[1].split(" ").map(Number);
let ans = 0;
let dp = new Array(k + 1);
for (let i = 0; i < dp.length; i++) {
  dp[i] = new Array(n + 1).fill(101);
}
for (let i = 0; i < n + 1; i++) {
  dp[0][i] = 0;
}
for (let i = 1; i < k + 1; i++) {
  for (let j = 1; j < n + 1; j++) {
    if (i - coffee[j - 1] < 0) dp[i][j] = dp[i][j - 1];
    else if (!(dp[i - coffee[j - 1]][j - 1] === 101 && dp[i][j - 1] === 101)) {
      dp[i][j] = Math.min(dp[i][j - 1], dp[i - coffee[j - 1]][j - 1] + 1);
    }
  }
}
// console.log(dp);
ans = dp[k][n];
if (ans === 101) {
  console.log(-1);
} else {
  console.log(ans);
}
