const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [h, w, x, y] = input.shift().split(" ").map(Number);
const arrB = input.map((i) => i.split(" ").map(Number));

for (let i = x; i < h; i++) {
  for (let j = y; j < w; j++) {
    arrB[i][j] -= arrB[i - x][j - y];
  }
}

console.log(
  arrB
    .slice(0, h)
    .map((a) => a.slice(0, w).join(" "))
    .join("\n")
);
