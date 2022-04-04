const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m, k] = input.shift().split(' ');
const board = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => 0)
);

input.forEach((i) => {
  const [x, y] = i.split(' ').map(Number);
  board[x - 1][y - 1] = 1;
});

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const bfs = (x, y) => {
  let cnt = 1;
  let queue = [];
  queue.push([x, y]);
  board[x][y] = 0;

  while (queue.length) {
    const [curX, curY] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [nextX, nextY] = [curX + dx[i], curY + dy[i]];
      if (
        nextX >= 0 &&
        nextX < n &&
        nextY >= 0 &&
        nextY < m &&
        board[nextX][nextY]
      ) {
        queue.push([nextX, nextY]);
        board[nextX][nextY] = 0;
        cnt++;
      }
    }
  }
  return cnt;
};

let ans = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j]) {
      ans = Math.max(ans, bfs(i, j));
    }
  }
}

console.log(ans);
