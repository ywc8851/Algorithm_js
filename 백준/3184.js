const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [row, col] = input.shift().split(" ").map(Number);
const arr = input.map((i) => i.trim().split(""));
const visited = Array.from({ length: row }, () =>
  Array.from({ length: col }, () => false)
);
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
const ans = Array.from({ length: 2 }, () => 0);
const bfs = (x, y) => {
  let oCnt = arr[x][y] === "o" ? 1 : 0;
  let vCnt = arr[x][y] === "v" ? 1 : 0;
  const queue = [[x, y]];
  visited[x][y] = true;

  while (queue.length) {
    const [cx, cy] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [cx + dx[i], cy + dy[i]];

      if (
        nx < 0 ||
        nx >= row ||
        ny < 0 ||
        ny >= col ||
        arr[nx][ny] === "#" ||
        visited[nx][ny]
      )
        continue;

      if (arr[nx][ny] === "o") oCnt++;
      if (arr[nx][ny] === "v") vCnt++;
      visited[nx][ny] = true;
      queue.push([nx, ny]);
    }
  }

  if (oCnt > vCnt) ans[0] += oCnt;
  else ans[1] += vCnt;
};

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if (!visited[i][j] && arr[i][j] !== "#") bfs(i, j);
  }
}

console.log(ans.join(" "));
