const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [M, N] = input.shift().split(' ').map(Number);

const arr = input.map((row) => row.split(' ').map(Number));
let tomato = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j] === 1) tomato.push([i, j]);
  }
}
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let answer = 0;
let curTomato = [];
function BFS() {
  while (tomato.length) {
    curTomato = [];
    for (let [x, y] of tomato) {
      for (j = 0; j < 4; j++) {
        const nx = x + dx[j];
        const ny = y + dy[j];

        if (0 <= nx && nx < N && 0 <= ny && ny < M && arr[nx][ny] === 0) {
          arr[nx][ny] = 1;
          curTomato.push([nx, ny]);
        }
      }
    }

    if (!curTomato.length) break;

    tomato = curTomato.slice();
    answer++;
  }
}

BFS();

for (let i = 0; i < N; i++) {
  if (arr[i].includes(0)) {
    return console.log('-1');
  }
}

return console.log(answer);
