const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const arr = input[1].split(" ").map(Number);

let ans = new Array(n).fill(0);
for (let i = 1; i < n + 1; i++) {
  let tmp = arr[i - 1];
  let count = 0;

  for (let j = 0; j < n; j++) {
    if (count === tmp && ans[j] === 0) {
      ans[j] = i;
      break;
    } else if (ans[j] === 0) {
      count += 1;
    }
  }
}
console.log(ans.join(" "));
