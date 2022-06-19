const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [row, col] = input.shift().split(" ").map(Number);
const arr = input.map(i => i.trim().split("").map(Number));
const visited = Array.from({ length: row }, () =>
  Array.from({ length: col }, () => false)
);
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const bfs = (x, y) => {
  visited[x][y] = true;
  const queue = [[x, y]];

  while (queue.length) {
    const [cx, cy] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [cx + dx[i], cy + dy[i]];
      if (
        nx < 0 ||
        nx >= row ||
        ny < 0 ||
        ny >= col ||
        arr[nx][ny] === 1 ||
        visited[nx][ny]
      )
        continue;

      visited[nx][ny] = true;
      queue.push([nx, ny]);
    }
  }
};

for (let i = 0; i < col; i++) {
  if (!visited[0][i]) bfs(0, i);
}

let ans = 0;
for (let i = 0; i < col; i++) {
  if (visited[row - 1][i]) {
    ans = 1;
    break;
  }
}

ans === 1 ? console.log("YES") : console.log("NO");
