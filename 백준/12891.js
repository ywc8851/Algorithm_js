const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [length, ansLength] = input.shift().split(" ").map(Number);
const arr = input.shift();
const [a, c, g, t] = input.shift().split(" ").map(Number);
let [aCnt, cCnt, gCnt, tCnt] = [0, 0, 0, 0];
let ans = 0;

for (let i = 0; i < ansLength; i++) {
  if (arr[i] === "A") aCnt++;
  if (arr[i] === "C") cCnt++;
  if (arr[i] === "G") gCnt++;
  if (arr[i] === "T") tCnt++;
}

if (aCnt >= a && cCnt >= c && gCnt >= g && tCnt >= t) ans++;

for (let i = ansLength; i < length; i++) {
  if (arr[i] === "A") aCnt++;
  if (arr[i] === "C") cCnt++;
  if (arr[i] === "G") gCnt++;
  if (arr[i] === "T") tCnt++;

  if (arr[i - ansLength] === "A") aCnt--;
  if (arr[i - ansLength] === "C") cCnt--;
  if (arr[i - ansLength] === "G") gCnt--;
  if (arr[i - ansLength] === "T") tCnt--;

  if (aCnt >= a && cCnt >= c && gCnt >= g && tCnt >= t) ans++;
}

console.log(ans);
