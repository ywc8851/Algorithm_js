const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const arr = input.map((i) => i.trim().split(""));

let curX;
let curY;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (arr[i][j] === "I") {
      curX = i;
      curY = j;
    }
  }
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
const queue = [[curX, curY]];
const visited = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => false)
);
let ans = 0;
visited[curX][curY] = true;

while (queue.length) {
  const [x, y] = queue.shift();
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];

    if (
      nx < 0 ||
      ny < 0 ||
      nx >= n ||
      ny >= m ||
      visited[nx][ny] ||
      arr[nx][ny] === "X"
    ) {
      continue;
    }
    visited[nx][ny] = true;
    if (arr[nx][ny] === "P") ans++;

    queue.push([nx, ny]);
  }
}

console.log(ans === 0 ? "TT" : ans);
