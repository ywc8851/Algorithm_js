const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input.shift().split("");
let ans = 0;
let stickCnt = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "(") {
    if (arr[i + 1] === ")") {
      ans += stickCnt;
      i += 1;
    } else {
      stickCnt++;
    }
  } else {
    ans++;
    stickCnt--;
  }
}
console.log(ans);
