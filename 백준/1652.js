const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const arr = input.map((i) => i.trim().split(""));

let rowAns = 0;
let colAns = 0;
let rowCnt = 0;
let colCnt = 0;

for (let i = 0; i < n; i++) {
  rowCnt = 0;
  colCnt = 0;
  for (let j = 0; j < n; j++) {
    if (arr[i][j] == ".") rowCnt++;
    else if (arr[i][j] == "X") {
      if (rowCnt >= 2) {
        rowAns++;
        rowCnt = 0;
      } else rowCnt = 0;
    }

    if (arr[j][i] == ".") colCnt++;
    else if (arr[j][i] == "X") {
      if (colCnt >= 2) {
        colAns++;
        colCnt = 0;
      } else colCnt = 0;
    }
  }
  if (rowCnt >= 2) rowAns++;
  if (colCnt >= 2) colAns++;
}

console.log(`${rowAns} ${colAns}`);
