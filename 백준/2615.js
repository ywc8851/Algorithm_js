const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const board = input.map((i) => i.split(' ').map(Number));
const dx = [1, 1, 0, -1];
const dy = [0, 1, 1, 1];
let ans = 0;
let ansX, ansY;

function check(x, y, color) {
  for (let i = 0; i < 4; i++) {
    let [nx, ny] = [x + dx[i], y + dy[i]];
    let cnt = 1;

    while (1) {
      if (ny < 0 || ny >= 19 || nx < 0 || nx >= 19) break;

      if (board[nx][ny] !== color) {
        break;
      }
      cnt++;
      nx = nx + dx[i];
      ny = ny + dy[i];
    }
    if (cnt === 5) {
      let prevx = x - dx[i];
      let prevy = y - dy[i];
      if (prevy >= 0 && prevy < 19 && prevx >= 0 && prevx < 19) {
        if (board[prevx][prevy] === color) {
          continue;
        }
      }
      ans = color;
      ansX = x;
      ansY = y;
      return;
    }
  }
  return;
}

for (let i = 0; i < 19; i++) {
  for (let j = 0; j < 19; j++) {
    if (board[i][j] === 0) continue;
    check(i, j, board[i][j]);
  }
}

if (ans === 0) console.log(0);
else console.log(`${ans}\n${ansX + 1} ${ansY + 1}`);
