const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let arr = new Array(n);
arr = input[1].split(" ").map(Number);
let ans = new Array(n);
let stack = [];
for (let i = n - 1; i >= 0; i--) {
  while (stack.length !== 0) {
    let v = stack.pop();
    if (v > arr[i]) {
      ans[i] = v;
      stack.push(v);
      stack.push(arr[i]);
      break;
    }
  }
  if (stack.length === 0) {
    ans[i] = -1;
    stack.push(arr[i]);
  }
}
console.log(ans.join(" "));
