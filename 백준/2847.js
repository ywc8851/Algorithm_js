const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const clearScores = input.slice(1).map((i) => +i);

let cnt = 0;
for (let i = clearScores.length - 1; i >= 1; i--) {
  if (clearScores[i] <= clearScores[i - 1]) {
    cnt += clearScores[i - 1] - clearScores[i] + 1;
    clearScores[i - 1] = clearScores[i] - 1;
  }
}

console.log(cnt);
