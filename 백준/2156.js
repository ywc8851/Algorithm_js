const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
const arr = input.map((i) => +i);
const dp = new Array(n).fill(0);

dp[1] = arr[0];
dp[2] = arr[0] + arr[1];

for (let i = 3; i <= n; i++) {
  dp[i] = Math.max(
    dp[i - 1],
    dp[i - 2] + arr[i - 1],
    dp[i - 3] + arr[i - 2] + arr[i - 1]
  );
}
console.log(dp[n]);
