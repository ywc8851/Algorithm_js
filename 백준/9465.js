const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const tc = +input[0];
let index = 1;
for (let i = 0; i < tc; i++) {
  const size = +input[index];
  const top = input[index + 1].split(" ").map(Number);
  const bottom = input[index + 2].split(" ").map(Number);
  let dp = [[0, top[0], bottom[0]]];
  for (let j = 1; j < size; j++) {
    dp[j] = [
      Math.max(dp[j - 1][0], dp[j - 1][1], dp[j - 1][2]),
      Math.max(dp[j - 1][0], dp[j - 1][2]) + top[j],
      Math.max(dp[j - 1][0], dp[j - 1][1]) + bottom[j],
    ];
  }
  console.log(Math.max(dp[size - 1][0], dp[size - 1][1], dp[size - 1][2]));
  index += 3;
}
