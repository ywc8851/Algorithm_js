const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [row, col] = input.shift().split(" ").map(Number);
const arr = input.map((i) => i.split(" ").map(Number));
const visited = Array.from({ length: row }, () =>
  Array.from({ length: col }, () => false)
);
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
let cnt = 0;
let maxSize = 0;

const solve = (x, y) => {
  let q = [];
  q.push([x, y]);
  visited[x][y] = true;
  let curSize = 1;

  while (q.length) {
    const [curx, cury] = q.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [curx + dx[i], cury + dy[i]];
      if (nx < 0 || nx >= row || ny < 0 || ny >= col) continue;

      if (arr[nx][ny] && !visited[nx][ny]) {
        q.push([nx, ny]);
        visited[nx][ny] = true;
        curSize++;
      }
    }
  }
  maxSize = Math.max(maxSize, curSize);
};

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if (arr[i][j] && !visited[i][j]) {
      solve(i, j);
      cnt++;
    }
  }
}

console.log(`${cnt}\n${maxSize}`);
