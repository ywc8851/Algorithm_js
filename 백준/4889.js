const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let inputs = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < inputs.length - 1; i++) {
  let str = inputs[i].trim();
  let stack = [];
  let cnt = 0;
  for (let j = 0; j < str.length; j++) {
    if (stack.length === 0 && str[j] === "}") {
      cnt++;
      stack.push("{");
    } else if (str[j] === "}") {
      stack.pop();
    } else {
      stack.push(str[j]);
    }
  }
  cnt += stack.length / 2;
  console.log(`${i + 1}. ${cnt}`);
}
