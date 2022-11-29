const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
let answer = 0;
let num = 1;
let d = 10;
let cnt = 1;
while (num <= N) {
  if (Math.floor(num / d) === 0) {
    num++;
    answer += cnt;
  } else {
    d *= 10;
    cnt++;
  }
}
console.log(answer);
