const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let num = input[0].split("").map(Number);
let ans = 0;
let idx = 0;
while (1) {
  ans++;
  const arr = String(ans).split("").map(Number);
  for (let i = 0; i < arr.length; i++) {
    if (num[idx] === arr[i]) {
      idx++;

      if (idx >= num.length) {
        console.log(ans);
        return;
      }
    }
  }
}
