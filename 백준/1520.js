const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [m, n] = input[0].split(" ").map(Number);
let arr = new Array(m);
for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(n);
}
for (let i = 0; i < arr.length; i++) {
  arr[i] = input[i + 1].split(" ").map(Number);
}
let dp = new Array(m);
for (let i = 0; i < dp.length; i++) {
  dp[i] = new Array(n).fill(-1);
}

function DFS(x, y) {
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];
  if (x === m - 1 && y === n - 1) return 1;
  if (dp[x][y] !== -1) return dp[x][y];
  dp[x][y] = 0;
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx >= 0 && nx < m && ny >= 0 && ny < n && arr[nx][ny] < arr[x][y]) {
      dp[x][y] += DFS(nx, ny);
    }
  }
  return dp[x][y];
}
console.log(DFS(0, 0));
