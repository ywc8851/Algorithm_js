const fs = require("fs");
const { exit } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let str = input[0];
if (!str.includes("0")) {
  console.log("-1");
  exit();
} else {
  let arr = new Array(str.length);
  arr = str.split("").map(Number);
  let sum = arr.reduce((a, b) => a + b);
  if (sum % 3 === 0) {
    arr.sort((a, b) => b - a);
    console.log(arr.join(""));
  } else {
    console.log("-1");
  }
}
