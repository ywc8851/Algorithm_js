const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const getSecondValue = (x, y) => {
  const a = [];
  for (let i = x; i < x + 2; i++)
    for (let j = y; j < y + 2; j++) a.push(arr[i][j]);
  a.sort((a, b) => a - b);
  return a[2];
};

let n = +input.shift();
const arr = input.map((i) => i.trim().split(" ").map(Number));
while (n > 1) {
  for (let i = 0; i < n; i += 2)
    for (let j = 0; j < n; j += 2) arr[i / 2][j / 2] = getSecondValue(i, j);
  n /= 2;
}
console.log(arr[0][0]);
