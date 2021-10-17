let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input[0]);
function isVPS(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") stack.push(str[i]);
    else {
      if (stack.length === 0) {
        return "NO";
      }
      stack.pop();
    }
  }

  if (stack.length !== 0) return "NO";
  else return "YES";
}

for (let i = 0; i < n; i++) {
  console.log(isVPS(input[i + 1]));
}
