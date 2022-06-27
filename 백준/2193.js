const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const arr = [0, 1, 1];
for (let i = 3; i <= n; i++) {
  arr[i] = BigInt(arr[i - 1]) + BigInt(arr[i - 2]);
}
console.log(BigInt(arr[n]).toString());
