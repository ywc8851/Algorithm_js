const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let arr = input[0].split("").map(Number);
let sum = arr.reduce((a, b) => a + b);
let cnt = 1;
let ansCnt = 0;
let ans = "";

if (sum < 10) {
  ansCnt = 0;
  if (sum % 3 === 0) {
    ans = "YES";
  } else {
    ans = "NO";
  }
} else {
  while (sum >= 10) {
    cnt += 1;
    sum = String(sum)
      .split("")
      .map(Number)
      .reduce((a, b) => a + b);
  }
  ansCnt = cnt;
  if (sum % 3 === 0) {
    ans = "YES";
  } else {
    ans = "NO";
  }
}

console.log(`${ansCnt}\n${ans}`);
