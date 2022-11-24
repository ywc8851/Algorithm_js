const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = new Array(10001).fill(0);
const changeNum = (num) => {
  let arr = num.toString().split("").map(Number);
  return num + arr.reduce((a, b) => a + b);
};

for (let i = 1; i < 10001; i++) {
  arr[changeNum(i)]++;
}

let ans = [];
for (let i = 1; i < 10001; i++) {
  if (arr[i] === 0) ans.push(i);
}
console.log(ans.join("\n"));
