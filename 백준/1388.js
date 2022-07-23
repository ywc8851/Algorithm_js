const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [row, col] = input.shift().split(" ").map(Number);
const arr = input.map((i) => i.trim().split(""));
const visited = Array.from({ length: row }, () =>
  Array.from({ length: col }, () => 0)
);
let cnt = 0;

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if (visited[i][j] !== 0) continue;

    cnt += 1;
    visited[i][j] = cnt;
    if (arr[i][j] === "-") {
      for (let k = j + 1; k < col; k++) {
        if (arr[i][k] !== "-") break;
        if (visited[i][k] !== 0) continue;

        if (arr[i][k] === "-") visited[i][k] = visited[i][j];
      }
    }
    if (arr[i][j] === "|") {
      for (let k = i + 1; k < row; k++) {
        if (arr[k][j] !== "|") break;
        if (visited[k][j] !== 0) continue;

        if (arr[k][j] === "|") visited[k][j] = visited[i][j];
      }
    }
  }
}
console.log(cnt);
