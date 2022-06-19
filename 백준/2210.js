const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input.map((i) => i.trim().split(" ").map(Number));
const ans = new Set();
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const dfs = (x, y, cnt, result) => {
  if (cnt === 5) {
    ans.add(result);
    return;
  }

  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (nx < 0 || nx >= 5 || ny < 0 || ny >= 5) continue;

    dfs(nx, ny, cnt + 1, result * 10 + arr[nx][ny]);
  }
};

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    dfs(i, j, 0, arr[i][j]);
  }
}

console.log(ans.size);
