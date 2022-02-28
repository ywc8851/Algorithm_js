const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const board = Array.from(Array(N), () => Array(N).fill(0));
let checked = Array.from(Array(N * N), () => Array(4).fill(0));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
let ans = 0;

function count(arr) {
  checked = Array.from(Array(N * N), () => Array(4).fill(0));
  let index = 0;
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < N; k++) {
      for (let m = 0; m < 4; m++) {
        let nx = j + dx[m];
        let ny = k + dy[m];
        if (nx >= 0 && ny >= 0 && nx < N && ny < N) {
          if (arr.includes(board[nx][ny])) checked[index][0]++;
          if (!board[nx][ny]) checked[index][1]++;
        }
      }
      checked[index][2] = j;
      checked[index][3] = k;
      index++;
    }
  }
}

function countSum(arr, x, y) {
  let cnt = 0;

  for (let m = 0; m < 4; m++) {
    let nx = x + dx[m];
    let ny = y + dy[m];
    if (nx >= 0 && ny >= 0 && nx < N && ny < N && arr.includes(board[nx][ny])) {
      cnt++;
    }
  }

  if (cnt === 0) return;

  ans += 10 ** (cnt - 1);
}

for (let i = 0; i < N * N; i++) {
  let bestFriend = input[i].split(' ').map(Number);
  let cur = bestFriend.shift();
  count(bestFriend);

  checked.sort(function (a, b) {
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    if (a[0] === b[0]) {
      if (a[1] > b[1]) return -1;
      if (a[1] < b[1]) return 1;
      if (a[1] === b[1]) return 0;
    }
  });

  let flag = false;
  for (let i = 0; i < checked.length; i++) {
    const row = checked[i][2];
    const col = checked[i][3];

    if (board[row][col] === 0) {
      board[row][col] = cur;
      flag = true;
    }
    if (flag) break;
  }
}

for (let i = 0; i < N * N; i++) {
  let bestFriend = input[i].split(' ').map(Number);
  let cur = bestFriend.shift();
  let curX, curY;
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < N; k++) {
      if (board[j][k] === cur) {
        (curX = j), (curY = k);
      }
    }
  }
  countSum(bestFriend, curX, curY);
}
console.log(ans);
