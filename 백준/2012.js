const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const arr = input.map(Number).sort((a, b) => a - b);
let ans = 0;

for (let i = 1; i <= n; i++) {
  ans += Math.abs(i - arr[i - 1]);
}

console.log(ans);
