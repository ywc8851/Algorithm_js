const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [row, col] = input.shift().split(" ").map(Number);
const arr = input.map((i) => i.split(" ").map(Number));
const distance = Array.from({ length: row }, () =>
  Array.from({ length: col }, () => 0)
);
let queue = [];

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if (arr[i][j]) {
      distance[i][j] = 1;
      queue.push([i, j]);
    }
  }
}

const dx = [-1, 1, 0, 0, -1, -1, 1, 1];
const dy = [0, 0, -1, 1, -1, 1, -1, 1];

while (queue.length) {
  const [x, y] = queue.shift();

  for (let i = 0; i < 8; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];

    if (nx < 0 || ny < 0 || nx >= row || ny >= col || distance[nx][ny] !== 0) {
      continue;
    }

    distance[nx][ny] = distance[x][y] + 1;
    queue.push([nx, ny]);
  }
}

let ans = 0;
for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    ans = Math.max(ans, distance[i][j]);
  }
}

console.log(ans - 1);
