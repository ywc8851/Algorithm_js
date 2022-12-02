const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const dp = Array.from({ length: 301 }, () => new Array(301).fill(0));

for (let i = 1; i <= N; i++) {
  const nums = input.shift().split(" ").map(Number);
  nums.forEach((num, index) => {
    dp[i][index + 1] =
      dp[i - 1][index + 1] + dp[i][index] - dp[i - 1][index] + num;
  });
}

const K = +input.shift();

let sum = 0;
for (let testCase = 0; testCase < K; testCase++) {
  const [y1, x1, y2, x2] = input.shift().split(" ").map(Number);

  sum = dp[y2][x2] - dp[y2][x1 - 1] - dp[y1 - 1][x2] + dp[y1 - 1][x1 - 1];
  console.log(sum);
}
