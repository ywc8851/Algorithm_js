const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input[0];
let m = +input[2];
let nums = input[1].split(' ').map(Number);
let dp = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => 0));
let ans = [];
nums.unshift(0);

for (let i = 1; i <= n - 1; i++) {
  dp[i][i] = 1;
  if (nums[i] === nums[i + 1]) dp[i][i + 1] = 1;
}
dp[n][n] = 1;

for (let diff = 2; diff <= n; diff++) {
  for (let startIndex = 1; startIndex + diff <= n; startIndex++) {
    let endIndex = startIndex + diff;
    if (dp[startIndex + 1][endIndex - 1] && nums[startIndex] === nums[endIndex]) dp[startIndex][endIndex] = 1;
  }
}

input.slice(3).map((i) => {
  const [start, end] = i.split(' ').map(Number);
  ans.push(dp[start][end]);
});
console.log(ans.join('\n'));
