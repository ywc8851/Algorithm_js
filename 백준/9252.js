const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const str1 = input[0];
const str2 = input[1];
const str1_len = str1.length;
const str2_len = str2.length;

const dp = Array.from(Array(str1_len + 1), () => Array(str2_len + 1).fill(""));
for (let i = 1; i < str1_len + 1; i++) {
  for (let j = 1; j < str2_len + 1; j++) {
    if (str1[i - 1] === str2[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + str2[j - 1];
    } else {
      if (dp[i][j - 1].length > dp[i - 1][j].length) {
        dp[i][j] = dp[i][j - 1];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
}
if (dp[str1_len][str2_len].length == 0) {
  console.log(0);
} else {
  console.log(dp[str1_len][str2_len].length);
  console.log(dp[str1_len][str2_len]);
}
