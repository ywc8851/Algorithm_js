const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let numbers = input[0].split("-").map((str) =>
  str
    .split("+")
    .map(Number)
    .reduce((s, v) => s + v)
);
let ans = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  ans -= numbers[i];
}
console.log(ans);
