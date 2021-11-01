const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let str = input[0];

let stack = [];
for (let i = 0; i < str.length; i++) {
  if (str[i] === "P") {
    if (
      stack.length > 2 &&
      stack[stack.length - 1] === "A" &&
      stack[stack.length - 2] === "P" &&
      stack[stack.length - 3] === "P"
    ) {
      stack.pop();
      stack.pop();
      stack.pop();
    }
    stack.push("P");
  } else {
    stack.push(str[i]);
  }
}
if (stack.length === 1 && stack[stack.length - 1] === "P") console.log("PPAP");
else console.log("NP");
