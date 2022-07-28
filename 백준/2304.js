const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const arr = input
  .map((i) => i.split(" ").map(Number))
  .sort((a, b) => a[0] - b[0]);
const h = Array(1001).fill(0);

arr.forEach((info) => {
  const [position, height] = info;
  h[position] = height;
});

let ans = 0;
let leftHeight = 0,
  leftIdx = 0;
let rightHeight = 0,
  rightIdx = 0;

for (let i = 0; i < 1001; i += 1) {
  if (h[i] >= leftHeight) {
    ans += leftHeight * (i - leftIdx);
    leftHeight = h[i];
    leftIdx = i;
  }
}

for (let j = 1000; j >= leftIdx; j -= 1) {
  if (h[j] >= rightHeight) {
    ans += rightHeight * (rightIdx - j);
    rightHeight = h[j];
    rightIdx = j;
  }
}
ans += rightHeight;
console.log(ans);
