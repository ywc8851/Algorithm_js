const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input.shift().split(" ").map(Number);
const score = input.map((i) => i.split(" ").map(Number));

score.sort((a, b) => {
  if (a[1] < b[1]) return 1;
  else if (a[1] > b[1]) return -1;
  else {
    if (a[2] < b[2]) return 1;
    else if (a[2] > b[2]) return -1;
    else {
      if (a[3] < b[3]) return 1;
      else if (a[3] > b[3]) return -1;
    }
  }
});

let result = 0;
let sameScoreNum = 0;

for (let i = 0; i < n; i++) {
  if (score[i][0] == k) {
    result = i;
    break;
  }
}
if (result !== 0) {
  for (let i = result - 1; ; i--) {
    if (
      score[i][1] !== score[result][1] ||
      score[i][2] !== score[result][2] ||
      score[i][3] !== score[result][3]
    ) {
      break;
    }
    sameScoreNum++;
  }
}
console.log(result - sameScoreNum + 1);
