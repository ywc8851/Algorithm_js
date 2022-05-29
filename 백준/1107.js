const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const m = +input.shift();
const broken = new Array(10).fill(false);
if (m !== 0) {
  input
    .shift()
    .split(" ")
    .map(Number)
    .forEach(a => (broken[a] = true));
}
let ans = Math.abs(n - 100);

function getDistance(N, num) {
  let buttons = Math.abs(N - num);
  if (num === 0) {
    if (broken[0]) return Infinity;
    else return ++buttons;
  }
  while (num > 0) {
    if (broken[num % 10]) return Infinity;
    num = Math.floor(num / 10);
    buttons++;
  }
  return buttons;
}

for (let i = 0; i <= n + Math.abs(n - 100); i++) {
  ans = Math.min(ans, getDistance(n, i));
}

console.log(ans);
