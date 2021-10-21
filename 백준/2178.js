const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0].split(" ")[0]);
let m = Number(input[0].split(" ")[1]);
let board = new Array(n);
for (let i = 0; i < board.length; i++) {
  board[i] = input[i + 1].trim().split("").map(Number);
}
let check = new Array(n);
for (let i = 0; i < check.length; i++) {
  check[i] = new Array(m).fill(0);
}
function BFS() {
  let L = 1;
  let queue = [];
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];
  queue.push([0, 0]);
  check[0][0] = 1;
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let v = queue.shift();
      if (v[0] === n - 1 && v[1] === m - 1) {
        return L;
      }
      for (let j = 0; j < 4; j++) {
        let nx = v[0] + dx[j];
        let ny = v[1] + dy[j];
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < m &&
          check[nx][ny] === 0 &&
          board[nx][ny]
        ) {
          check[nx][ny] = 1;
          queue.push([nx, ny]);
        }
      }
    }
    L++;
  }
}
let answer = BFS();
console.log(answer);
