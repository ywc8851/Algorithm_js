const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const nums = new Set(input[1].split(" "));
const targets = input[3].split(" ");
let ans = [];

for (const target of targets) {
  nums.has(target) ? ans.push(1) : ans.push(0);
}

console.log(ans.join(" "));
