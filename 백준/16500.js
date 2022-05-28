const fs = require("fs");
const { exit } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const s = input.shift();
const len = s.length;
const n = +input.shift();
const a = input.map(i => i.trim());
const dp = new Array(len).fill(0);
let ans = 0;

const find = idx => {
  if (idx === len - 1) {
    ans = 1;
    return;
  }
  if (dp[idx]) return;
  dp[idx] = true;
  for (let i = 0; i < n; i++) {
    if (a[i] === s.substring(idx, idx + a[i].length)) {
      find(idx + a[i].length);
    }
  }
};

find(0);
ans === 1 ? console.log("1") : console.log("0");
