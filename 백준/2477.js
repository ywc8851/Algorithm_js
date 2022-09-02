const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let smallSquare = 1;
let bigSquare = 1;
const arr = Array.from({ length: 8 }, () => Array.from({ length: 4 }, () => 0));
const cnt = Array.from({ length: 5 }, () => 0);
const k = +input.shift();

for (let i = 0; i < 6; i++) {
  [arr[i][0], arr[i][1]] = input[i].split(" ").map(Number);
  cnt[arr[i][0]]++;
}

for (let i = 0; i < 6; i++) {
  if (cnt[arr[i][0]] === 1) {
    bigSquare *= arr[i][1];
    continue;
  }

  let n = (i + 1) % 6;
  let nn = (i + 2) % 6;
  if (arr[i][0] === arr[nn][0]) smallSquare *= arr[n][1];
}

console.log((bigSquare - smallSquare) * k);
