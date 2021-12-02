const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let str1 = input[0].trim();
let str2 = input[1].trim();
let dp = new Array(str1.length + 1);
for (let i = 0; i < dp.length; i++) {
  dp[i] = new Array(str2.length + 1).fill(0);
}
let ans = 0;
for (let i = 1; i <= str1.length; i++) {
  for (let j = 1; j <= str2.length; j++) {
    if (str1[i - 1] === str2[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = 0;
    }
    if (dp[i][j] > ans) ans = dp[i][j];
  }
}
console.log(ans);
