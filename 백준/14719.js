const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const height = input[1].split(" ").map(Number);
let ans = 0;

for (let i = 1; i < height.length - 1; i++) {
  const add =
    Math.min(Math.max(...height.slice(0, i)), Math.max(...height.slice(i))) -
    height[i];

  add > 0 ? (ans += add) : (ans += 0);
}

console.log(ans);
