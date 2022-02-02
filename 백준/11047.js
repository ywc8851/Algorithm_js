const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, K] = input.shift().split(" ").map(Number);
const coins = input.map((coin) => +coin);
let q = (ans = 0);
for (let i = N - 1; i > -1; i--) {
  const coin = coins[i];
  q = parseInt(K / coin);
  if (!q) continue;

  ans += q;
  K %= coin;
  if (!K) break;
}

console.log(ans);
