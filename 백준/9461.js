const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const tc = +input.shift();
const question = input.map(i => +i);
const max = Math.max(...question);
const dp = Array.from({ length: max + 1 }, () => 0);

dp[1] = dp[2] = dp[3] = 1;
dp[4] = dp[5] = 2;
for (let i = 6; i <= max; i++) {
  dp[i] = dp[i - 1] + dp[i - 5];
}
question.forEach(q => console.log(dp[q]));
