const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [row, col] = input.shift().split(' ').map(Number);
const arr = input.map((i) => i.trim().split(''));
const visited = Array.from({ length: row }, () => Array.from({ length: col }, () => 0));
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
const waterQueue = [];

let sX, sY, eX, eY;
let ans = 0;

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if (arr[i][j] === 'S') {
      sX = i;
      sY = j;
    }
    if (arr[i][j] === 'D') {
      eX = i;
      eY = j;
    }
    if (arr[i][j] === '*') {
      waterQueue.push([i, j]);
    }
  }
}

const waterBfs = () => {
  const queue = [];
  for (let [x, y] of waterQueue) {
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || nx >= row || ny < 0 || ny >= col || arr[nx][ny] !== '.') continue;

      arr[nx][ny] = '*';
      queue.push([nx, ny]);
    }
  }
  waterQueue.push(...queue);
};

const bfs = () => {
  let queue = [];
  queue.push([sX, sY, 0]);
  visited[sX][sY] = 1;

  while (queue.length) {
    const qLen = queue.length;
    waterBfs();

    for (let i = 0; i < qLen; i++) {
      const [x, y, cnt] = queue.shift();
      if (x === eX && y === eY) {
        ans = cnt;
        return;
      }

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx < 0 || nx >= row || ny < 0 || ny >= col || arr[nx][ny] === '*' || arr[nx][ny] === 'X' || visited[nx][ny]) continue;
        visited[nx][ny] = 1;
        queue.push([nx, ny, cnt + 1]);
      }
    }
  }
  return;
};

bfs();

ans > 0 ? console.log(ans) : console.log('KAKTUS');
