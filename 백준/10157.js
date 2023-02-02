const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [col, row] = input.shift().split(" ").map(Number);
const k = +input.shift();
const arr = Array.from({ length: row }, () =>
  Array.from({ length: col }, () => 0)
);
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
let curX = row - 1;
let curY = 0;
let curDir = 0;
arr[curX][curY] = 1;

if (k === 1) console.log(`1 1`);
else if (row * col < k) console.log(0);
else {
  for (let i = 1; i < k; i++) {
    let [nextX, nextY] = [curX + dx[curDir], curY + dy[curDir]];
    while (1) {
      if (
        nextX >= row ||
        nextX < 0 ||
        nextY >= col ||
        nextY < 0 ||
        arr[nextX][nextY] !== 0
      ) {
        curDir = (curDir + 1) % 4;
        [nextX, nextY] = [curX + dx[curDir], curY + dy[curDir]];
      } else {
        arr[nextX][nextY] = 1;
        curX = nextX;
        curY = nextY;
        break;
      }
    }
  }

  console.log(curY + 1, row - curX);
}
