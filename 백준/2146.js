const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

let board = input.map((i) => i.split(' ').map(Number));
let visited = Array.from(Array(n), () => Array(n).fill(false));
let islandCnt = 0;

function check(x, y) {
  return 0 <= x && x < n && 0 <= y && y < n;
}

function dfs(x, y, islandCnt) {
  visited[x][y] = true;
  board[x][y] = islandCnt;

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (check(nx, ny) && board[nx][ny] && !visited[nx][ny]) dfs(nx, ny, islandCnt);
  }
}

// 섬 구역별로 나누기
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] && !visited[i][j]) dfs(i, j, ++islandCnt);
  }
}

function bfs(islandCnt) {
  let queue = [];
  visited = Array.from(Array(n), () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++)
      if (board[i][j] == islandCnt) {
        visited[i][j] = 1;
        queue.push([i, j]);
      }
  }

  let cnt = 0;
  while (queue.length) {
    let qlen = queue.length;

    while (qlen--) {
      let cur = queue.shift();
      let x = cur[0];
      let y = cur[1];

      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        // 지도를 벗어나는 경우
        if (!check(nx, ny)) continue;

        // 이동하려는 칸이 육지이고, 이동하기 전의 대륙의 번호와 다른 번호라면 종료
        if (board[nx][ny] !== 0 && board[nx][ny] !== islandCnt) return cnt;

        // 이동하려는 칸이 바다라면 큐에 넣어주고 계속 진행.
        if (board[nx][ny] === 0 && !visited[nx][ny]) {
          visited[nx][ny] = 1;
          queue.push([nx, ny]);
        }
      }
    }
    cnt++;
  }
}

let ans = Infinity;
for (let i = 1; i <= islandCnt; i++) {
  ans = Math.min(ans, bfs(i));
}

console.log(ans);
