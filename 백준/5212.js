const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [row, col] = input.shift().split(" ").map(Number);
const arr = input.map((i) => i.trim().split(""));
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
const tmp = [];

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if (arr[i][j] === "X") {
      let cnt = 0;

      for (let k = 0; k < 4; k++) {
        const [nx, ny] = [i + dx[k], j + dy[k]];
        if (nx < 0 || ny < 0 || nx >= row || ny >= col) cnt++;
        else if (arr[nx][ny] === ".") cnt++;

        if (cnt >= 3) tmp.push([i, j]);
      }
    }
  }
}

for (let i = 0; i < tmp.length; i++) {
  arr[tmp[i][0]][tmp[i][1]] = ".";
}

let minRow = (minCol = 11);
let maxRow = (maxCol = 0);

for (let r = 0; r < row; r++) {
  for (let c = 0; c < col; c++) {
    if (arr[r][c] === "X") {
      minRow = Math.min(minRow, r);
      maxRow = Math.max(maxRow, r);
      minCol = Math.min(minCol, c);
      maxCol = Math.max(maxCol, c);
    }
  }
}

let ans = "";
for (let r = minRow; r <= maxRow; r++) {
  for (let c = minCol; c <= maxCol; c++) {
    ans += arr[r][c];
  }
  ans += "\n";
}

console.log(ans);
