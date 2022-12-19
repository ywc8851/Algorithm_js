const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const arr = Array.from({ length: n }, (v, idx) => idx + 1);
const ans = [];
if (arr.length === 1) {
  console.log(arr[0]);
} else {
  while (arr.length !== 1) {
    ans.push(arr.shift());
    arr.push(arr.shift());
  }

  console.log(`${ans.join(" ")} ${arr[0]}`);
}
