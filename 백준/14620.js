const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const arr = input.map((i) => i.split(' ').map(Number));
const visited = Array.from(Array(N), () => Array(N).fill(false));
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

let ans = Infinity;

function isImpossible(y, x) {
  if (visited[y][x]) return true;
  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];
    if (visited[ny][nx]) return true;
  }
  return false;
}

function dfs(row, col, cost, cnt) {
  if (cnt === 3) {
    ans = Math.min(ans, cost);
    return;
  }

  for (let i = row; i < N - 1; i++) {
    for (let j = col; j < N - 1; j++) {
      if (isImpossible(i, j)) continue;

      visited[i][j] = true;
      let addCost = arr[i][j];
      for (let k = 0; k < 4; k++) {
        let nRow = i + dy[k];
        let nCol = j + dx[k];
        visited[nRow][nCol] = true;
        addCost += arr[nRow][nCol];
      }

      dfs(i, j + 1, cost + addCost, cnt + 1);

      visited[i][j] = false;
      for (let k = 0; k < 4; k++) {
        let nRow = i + dy[k];
        let nCol = j + dx[k];
        visited[nRow][nCol] = false;
      }
    }
    // j = 1;
  }
}

dfs(1, 1, 0, 0);

console.log(ans);
