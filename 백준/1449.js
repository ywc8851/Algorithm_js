const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, l] = input.shift().split(" ").map(Number);
const arr = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let curPosition = arr[0] - 0.5;
let cnt = 1;

for (let i = 1; i < arr.length; i++) {
  if (curPosition + l < arr[i] + 0.5) {
    cnt++;
    curPosition = arr[i] - 0.5;
  }
}

console.log(cnt);
