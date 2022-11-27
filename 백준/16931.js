const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = Array.from({ length: 102 }, () => new Array(102));
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
let ans = 0;

for (let i = 0; i < N + 2; i++) {
  for (let j = 0; j < M + 2; j++) {
    arr[i][j] = 0;
  }
}

for (let i = 1; i <= N; i++) {
  const arr2 = input.shift().split(" ").map(Number);
  for (let j = 1; j <= M; j++) {
    arr[i][j] = arr2[j - 1];
  }
}

for (let x = 1; x <= N; x++) {
  for (let y = 1; y <= M; y++) {
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (arr[x][y] >= arr[nx][ny]) {
        ans += arr[x][y] - arr[nx][ny];
      }
    }
  }
}

ans += 2 * (N * M);
console.log(ans);
