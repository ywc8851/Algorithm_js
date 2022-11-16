const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [children] = input.shift().split(" ").map(Number);
const cookies = input.shift().split(" ").map(Number);
let left = 0;
let right = Math.max(...cookies);
let ans = 0;

while (left <= right) {
  let cnt = 0;
  const mid = parseInt((left + right) / 2);
  cookies.forEach((cookie) => {
    cnt += Math.floor(cookie / mid);
  });

  if (children > cnt) right = mid - 1;
  else {
    ans = Math.max(ans, mid);
    left = mid + 1;
  }
}

console.log(ans);
