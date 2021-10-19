let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let num = Number(input[0]);
let top = new Array(num);
let ans = new Array(num);
top = input[1].split(" ").map(Number);
let stack = [];

for (let i = 0; i < num; i++) {
  if (stack.length === 0) {
    ans[i] = 0;
    stack.push([top[i], i + 1]);
  } else {
    while (stack.length !== 0) {
      let v = stack.pop();
      if (v[0] > top[i]) {
        ans[i] = v[1];
        stack.push([v[0], v[1]]);
        stack.push([top[i], i + 1]);
        break;
      }
    }
    if (stack.length === 0) {
      ans[i] = 0;
      stack.push([top[i], i + 1]);
    }
  }
}
console.log(ans.join(" "));
