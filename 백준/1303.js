const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [col, row] = input.shift().split(" ").map(Number);
const arr = input.map((i) => i.trim().split(""));
const visited = Array.from({ length: row }, () =>
  Array.from({ length: col }, () => false)
);
const ans = Array.from({ length: 2 }, () => 0);
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const bfs = (x, y) => {
  visited[x][y] = true;
  const char = arr[x][y];
  const queue = [[x, y]];
  let cnt = 1;

  while (queue.length) {
    const [cx, cy] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [cx + dx[i], cy + dy[i]];
      if (
        nx < 0 ||
        nx >= row ||
        ny < 0 ||
        ny >= col ||
        visited[nx][ny] ||
        arr[nx][ny] !== char
      )
        continue;

      cnt++;
      visited[nx][ny] = true;
      queue.push([nx, ny]);
    }
  }

  char === "W" ? (ans[0] += Math.pow(cnt, 2)) : (ans[1] += Math.pow(cnt, 2));
};

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if (!visited[i][j]) bfs(i, j);
  }
}

console.log(ans.join(" "));
