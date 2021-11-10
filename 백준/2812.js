const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, k] = input[0].split(" ").map(Number);
let arr = new Array(n);
arr = input[1].split("").map(Number);
let stack = [];
let cnt = k;
for (let i = 0; i < arr.length; i++) {
  if (stack.length === 0) {
    stack.push(arr[i]);
  } else {
    while (cnt > 0 && arr[i] > stack[stack.length - 1]) {
      stack.pop();
      cnt--;
    }
    stack.push(arr[i]);
  }
}
while (cnt > 0) {
  stack.pop();
  cnt--;
}
console.log(stack.join(""));
