const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let ans = 0;
let n = Number(input[0]);
let board = new Array(n);
for (let i = 0; i < board.length; i++) {
  board[i] = input[i + 1].split("").map(Number);
}
let visit = new Array(n);
for (let i = 0; i < visit.length; i++) {
  visit[i] = new Array(n).fill(0);
}
let cnt_ans = [];
function BFS(x, y) {
  let cnt = 1;
  let queue = [];
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];
  queue.push([x, y]);
  visit[x][y] = 1;
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let x = queue.shift();
      for (let j = 0; j < 4; j++) {
        let nx = x[0] + dx[j];
        let ny = x[1] + dy[j];
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          board[nx][ny] === 1 &&
          visit[nx][ny] === 0
        ) {
          visit[nx][ny] = 1;
          queue.push([nx, ny]);
          cnt++;
        }
      }
    }
  }
  cnt_ans.push(cnt);
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] === 1 && visit[i][j] === 0) {
      BFS(i, j);
      ans++;
    }
  }
}
console.log(cnt_ans.length);
cnt_ans.sort((a, b) => a - b);
for (let i = 0; i < cnt_ans.length; i++) {
  console.log(cnt_ans[i]);
}
