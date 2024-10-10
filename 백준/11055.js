const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const arr = input.shift().split(" ").map(Number);
const dp = Array.from({ length: 1001 }, () => 0);
let ans = 0;
for (let i = 0; i < arr.length; i++) {
  const cur = arr[i];

  let prevDp = 0;
  for (let j = 0; j < cur; j++) {
    prevDp = Math.max(prevDp, dp[j]);
  }
  dp[cur] = prevDp + cur;
  ans = Math.max(ans, dp[cur]);
}

console.log(ans);
