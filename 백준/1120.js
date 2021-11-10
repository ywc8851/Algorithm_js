const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [x, y] = input[0].split(" ");
let ans = Infinity;
for (let i = 0; i <= y.length - x.length; i++) {
  let cnt = 0;
  for (let j = 0; j < x.length; j++) {
    if (x[j] !== y[i + j]) cnt++;
  }
  ans = Math.min(ans, cnt);
}
console.log(ans);
