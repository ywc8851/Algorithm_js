const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const str = input[0];
const set = new Set();

for (let i = 0; i < str.length; i++) {
  for (let j = i; j < str.length; j++) {
    const subStr = str.substring(i, j + 1);
    set.add(subStr);
  }
}

console.log(set.size);
