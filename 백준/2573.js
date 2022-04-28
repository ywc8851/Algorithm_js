const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [row, col] = input.shift().split(' ').map(Number);
const arr = input.map((i) => i.split(' ').map(Number));
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const checkIsland = (arr) => {
  let islandCnt = 0;
  let visited = Array.from({ length: row }, () => Array.from({ length: col }, () => false));

  const bfs = (x, y) => {
    let queue = [];
    queue.push([x, y]);
    visited[x][y] = true;

    while (queue.length) {
      let [curX, curY] = queue.shift();

      for (let i = 0; i < 4; i++) {
        let [newX, newY] = [curX + dx[i], curY + dy[i]];
        if (newX >= 0 && newX < row && newY >= 0 && newY < col && arr[newX][newY] !== 0 && !visited[newX][newY]) {
          queue.push([newX, newY]);
          visited[newX][newY] = true;
        }
      }
    }
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (arr[i][j] && !visited[i][j]) {
        bfs(i, j);
        islandCnt++;
      }
    }
  }
  return islandCnt >= 2 ? true : false;
};

const checkAllZero = (arr) => {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (arr[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
};

let time = 0;
while (1) {
  let around = Array.from({ length: row }, () => Array.from({ length: col }, () => 0));
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (arr[i][j]) {
        for (let k = 0; k < 4; k++) {
          let [nx, ny] = [i + dx[k], j + dy[k]];
          if (nx >= 0 && nx < row && ny >= 0 && ny < col && arr[nx][ny] === 0) {
            around[i][j]++;
          }
        }
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (arr[i][j]) arr[i][j] = arr[i][j] - around[i][j] > 0 ? arr[i][j] - around[i][j] : 0;
    }
  }
  time++;

  if (checkIsland(arr)) {
    console.log(time);
    break;
  }

  if (checkAllZero(arr)) {
    console.log(0);
    break;
  }
}
