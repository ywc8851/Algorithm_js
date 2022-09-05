const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const findNum = +input.shift();
const arr = Array.from({ length: N }, () => Array.from({ length: N }, () => 0));
let [ansRow, ansCol] = [0, 0];
let cnt = 1;
let num = 1;
let row = parseInt(N / 2);
let col = parseInt(N / 2);

while (1) {
  for (let i = 1; i <= cnt; i++) {
    if (num === findNum) {
      ansRow = row;
      ansCol = col;
    }
    arr[row--][col] = num++;
  }
  if (num >= N * N) break;
  for (let i = 1; i <= cnt; i++) {
    if (num === findNum) {
      ansRow = row;
      ansCol = col;
    }
    arr[row][col++] = num++;
  }
  cnt++;
  for (let i = 1; i <= cnt; i++) {
    if (num === findNum) {
      ansRow = row;
      ansCol = col;
    }
    arr[row++][col] = num++;
  }
  for (let i = 1; i <= cnt; i++) {
    if (num === findNum) {
      ansRow = row;
      ansCol = col;
    }
    arr[row][col--] = num++;
  }
  if (num >= N * N) break;
  cnt++;
}

let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += arr[i].join(" ") + "\n";
}
answer += `${ansRow + 1} ${ansCol + 1}`;
console.log(answer);
