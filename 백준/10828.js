const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();
const stack = [];
const ans = [];

input.map((i) => {
  const arr = i.trim().split(" ");
  const oper = arr[0];

  if (oper === "push") stack.push(Number(arr[1]));
  else if (oper === "pop") {
    if (stack.length !== 0) ans.push(stack.pop());
    else ans.push(-1);
  } else if (oper === "size") ans.push(stack.length);
  else if (oper === "empty") ans.push(stack.length === 0 ? 1 : 0);
  else if (oper === "top") {
    if (stack.length !== 0) ans.push(stack[stack.length - 1]);
    else ans.push(-1);
  }
});

console.log(ans.join("\n"));
