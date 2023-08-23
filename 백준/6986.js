const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input.shift().split(" ").map(Number);
const scores = input.map((i) => +i).sort((a, b) => a - b);

const ans1 = (
  scores.slice(k, n - k).reduce((a, b) => a + b, 0) / (n - 2 * k) +
  +1e-8
).toFixed(2);

const arr = [];
for (let i = 0; i < scores.length; i++) {
  if (i < k) arr.push(scores[k]);
  else if (i >= n - k) arr.push(scores[n - k - 1]);
  else arr.push(scores[i]);
}

const ans2 = (arr.reduce((a, b) => a + b, 0) / n + 0.00000001).toFixed(2);
console.log(`${ans1}\n${ans2}`);
