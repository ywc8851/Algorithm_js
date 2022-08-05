const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [row, col] = input.shift().split(" ").map(Number);
const arr = input.map((i) => i.trim().split(""));
const answer = [];
const line = ["WBWBWBWB", "BWBWBWBW"];

for (let i = 0; i <= row - 8; i++) {
  for (let j = 0; j <= col - 8; j++) {
    for (let z = 0; z < 2; z++) {
      let count = 0;

      for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
          if (arr[i + x][j + y] !== line[(x + z) % 2][y]) count++;
        }
      }

      answer.push(count);
    }
  }
}
console.log(Math.min(...answer));
