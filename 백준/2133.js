const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
const dp = Array.from({ length: n + 1 }, () => 0);

dp[2] = 3;

for (let i = 4; i <= n; i += 2) {
  dp[i] = dp[i - 2] * dp[2] + 2;
  for (let j = 4; j < i; j += 2) {
    dp[i] += dp[i - j] * 2;
  }
}

console.log(dp[n]);
