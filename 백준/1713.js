const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const arr = input[2].split(" ").map(Number);

const picture = [];
const cnts = {};

for (let i = 0; i < arr.length; i++) {
  const cur = arr[i];
  if (picture.includes(cur)) {
    cnts[cur] += 1;
    continue;
  }

  if (picture.length >= n) {
    let minCntIdx = [];
    let minCnt = 1000;
    for (let j = 0; j < n; j++) {
      if (cnts[picture[j]] < minCnt) {
        minCntIdx = [j];
        minCnt = cnts[picture[j]];
      } else if (cnts[picture[j]] === minCnt) {
        minCntIdx.push(j);
      }
    }

    delete cnts[picture[minCntIdx[0]]];
    picture.splice(minCntIdx[0], 1);
  }

  picture.push(cur);
  cnts[cur] = 1;
}

console.log(picture.sort((a, b) => a - b).join(" "));
