const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [, h] = input.shift().split(" ").map(Number);
const down = new Array(500001).fill(0);
const up = new Array(500001).fill(0);

input.map((i, idx) => {
  if (idx % 2 === 0) down[+i]++;
  else up[+i]++;
});

for (let i = h - 1; i >= 1; i--) {
  down[i] += down[i + 1];
  up[i] += up[i + 1];
}

const arr = [];
for (let i = 1; i <= h; i++) {
  arr.push(down[i] + up[h - i + 1]);
}

arr.sort((a, b) => a - b);
const min = arr[0];
let cnt = 1;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] === min) cnt++;
  else break;
}
console.log(min, cnt);
