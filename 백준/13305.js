const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = Number(input[0]);
let dist = input[1].split(" ").map(Number);
let price = input[2].split(" ").map(Number);
let ans = BigInt(0);
let cur = price[0];
for (let i = 0; i < N - 1; i++) {
  ans += BigInt(cur * dist[i]);
  if (cur > price[i + 1]) cur = price[i + 1];
}
console.log(String(ans));
