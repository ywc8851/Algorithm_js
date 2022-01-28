const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const tc = input[0];
let arr = [0, 1, 2, 4];

for (let i = 0; i < tc; i++) {
  const num = +input[i + 1];
  for (let j = 4; j <= num; j++) {
    arr[j] = arr[j - 1] + arr[j - 2] + arr[j - 3];
  }
  console.log(arr[num]);
}
