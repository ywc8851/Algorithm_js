const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

let arr = input.map((element) => element.split(" ").map(Number));
arr.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
console.log(arr.map((element) => element.join(" ")).join("\n"));
