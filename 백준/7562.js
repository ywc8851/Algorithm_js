let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let tc = Number(input[0]);
let index = 1;

for (let i = 0; i < tc; i++) {
  let board_size = Number(input[index]);
  let board = new Array(board_size);
  for (let j = 0; j < board.length; j++) {
    board[j] = new Array(board_size).fill(0);
  }
  let start_x = Number(input[index + 1].split(" ")[0]);
  let start_y = Number(input[index + 1].split(" ")[1]);
  let end_x = Number(input[index + 2].split(" ")[0]);
  let end_y = Number(input[index + 2].split(" ")[1]);
  board[start_x][start_y] = 1;
  function BFS() {
    let L = 0;
    let dx = [2, 2, -2, -2, 1, 1, -1, -1];
    let dy = [1, -1, 1, -1, 2, -2, 2, -2];
    let queue = [];
    queue.push([start_x, start_y]);
    while (queue.length) {
      let len = queue.length;
      for (let i = 0; i < len; i++) {
        let v = queue.shift();
        if (v[0] === end_x && v[1] === end_y) {
          return L;
        }
        for (let i = 0; i < 8; i++) {
          let nx = v[0] + dx[i];
          let ny = v[1] + dy[i];
          if (
            nx >= 0 &&
            nx < board_size &&
            ny >= 0 &&
            ny < board_size &&
            board[nx][ny] === 0
          ) {
            board[nx][ny] = 1;
            queue.push([nx, ny]);
          }
        }
      }
      L++;
    }
  }
  console.log(BFS());
  index += 3;
}
