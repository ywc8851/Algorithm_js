const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [truckNum, length, maxWeight] = input[0].split(" ").map(Number);
const truckWeight = input[1].split(" ").map(Number);
let ans = 0;

let q = [];
let sum = 0;
for (let i = 0; i < truckNum; i++) {
  while (1) {
    if (q.length === length) {
      sum -= q.shift();
    }
    if (sum + truckWeight[i] <= maxWeight) break;
    q.push(0);
    ans++;
  }
  q.push(truckWeight[i]);
  sum += truckWeight[i];
  ans++;
}
ans += length;
console.log(ans);
