const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const line = Number(input[0]);
const DP = Array.from({ length: line + 1 }, () => 0);
DP[1] = 1;
DP[2] = 3;

for (let i = 3; i <= line; i++) {
  DP[i] = (DP[i - 1] + 2 * DP[i - 2]) % 10007;
}
console.log(DP[line]);
