const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.map((i) => i.split("").map(Number));

let ans = 1;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    for (let k = j + 1; k < M; k++) {
      if (arr[i][k] === arr[i][j]) {
        let length = k - j + 1;
        if (
          i + length - 1 < N &&
          arr[i][j] === arr[i + length - 1][j] &&
          input[i + length - 1][j] === input[i + length - 1][k]
        ) {
          ans = Math.max(length * length, ans);
        }
      }
    }
  }
}

console.log(ans);
