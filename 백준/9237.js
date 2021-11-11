const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
arr.sort((a, b) => b - a);
let cur_time = 1;
let ans = 0;
for (let i = 0; i < arr.length; i++) {
  cur_time++;
  ans = Math.max(ans, cur_time + arr[i]);
}
console.log(ans);
