const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let arr = input[1].split("").map(Number);
let sum = 0;
arr.forEach(function (el) {
  sum += el;
});
console.log(sum);
