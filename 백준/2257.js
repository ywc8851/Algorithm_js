const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const str = input[0];
const stack = Array.from({ length: 50 }, () => 0);
let idx = 0;
let tmp = 0;

for (let i = 0; i < str.length; ++i) {
  let c = str[i];

  if (c === "H") {
    tmp = 1;
    stack[idx] += 1;
  } else if (c === "C") {
    tmp = 12;
    stack[idx] += 12;
  } else if (c === "O") {
    tmp = 16;
    stack[idx] += 16;
  } else if (c === "(") {
    stack[++idx] = 0;
  } else if (c === ")") {
    tmp = stack[idx--];
    stack[idx] += tmp;
  } else if ("1" < c && c <= "9") {
    stack[idx] += tmp * (c - "1");
  }
}

console.log(stack[0]);
