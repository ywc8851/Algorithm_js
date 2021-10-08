let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);

let arr = new Array(n);
for (var i = 0; i < arr.length; i++) {
  arr[i] = new Array(3);
  for (let j = 0; j < 3; j++) {
    arr[i][j] = Number(input[i + 1].split(" ")[j]);
  }
}

let dp = new Array(n);
for (let i = 0; i < n; i++) {
  dp[i] = [0, 0, 0];
}
dp[0] = arr[0];

for (let i = 1; i < n; i++) {
  dp[i][0] = arr[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
  dp[i][1] = arr[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
  dp[i][2] = arr[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
}
let ans = Math.min(dp[n - 1][0], dp[n - 1][1], dp[n - 1][2]);
console.log(ans);
