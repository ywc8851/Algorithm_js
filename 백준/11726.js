const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const dp = Array.from({ length: N }, () => 0);
dp[0] = 1;
dp[1] = 2;

for (let i = 2; i < N; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[N - 1]);
