const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
let answer = "";

if (n >= 90) answer = "A";
else if (n >= 80) answer = "B";
else if (n >= 70) answer = "C";
else if (n >= 60) answer = "D";
else answer = "F";

console.log(answer);
