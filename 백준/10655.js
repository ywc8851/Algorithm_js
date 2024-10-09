const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const arr = input.map((i) => i.split(" ").map(Number));
let distSum = 0;
let minus = 0;

const calcDist = (point1, point2) => {
  return Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1]);
};

for (let i = 0; i < n - 1; i++) {
  const cur = arr[i];
  const next = arr[i + 1];

  distSum += calcDist(cur, next);

  if (i !== n - 2) {
    const jump = arr[i + 2];
    const originDist = calcDist(cur, next) + calcDist(next, jump);
    const jumpDist = calcDist(cur, jump);

    minus = Math.max(Math.abs(originDist - jumpDist), minus);
  }
}

console.log(distSum - minus);
