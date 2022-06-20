const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [row, col] = input.shift().split(" ").map(Number);
const arr = input.map((i) => i.trim().split(" ").map(Number));
const visited = Array.from({ length: row }, () =>
  Array.from({ length: col }, () => false)
);
const dx = [0, 0, 1, -1, 1, 1, -1, -1];
const dy = [1, -1, 0, 0, 1, -1, 1, -1];

const bfs = (x, y) => {
  visited[x][y] = true;
  const queue = [[x, y]];
  while (queue.length) {
    const [cx, cy] = queue.shift();
    for (let i = 0; i < 8; i++) {
      const [nx, ny] = [cx + dx[i], cy + dy[i]];
      if (
        nx < 0 ||
        nx >= row ||
        ny < 0 ||
        ny >= col ||
        visited[nx][ny] ||
        arr[nx][ny] === 0
      )
        continue;

      visited[nx][ny] = true;
      queue.push([nx, ny]);
    }
  }
};

let ans = 0;
for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if (arr[i][j] === 1 && !visited[i][j]) {
      bfs(i, j);
      ans++;
    }
  }
}

console.log(ans);
