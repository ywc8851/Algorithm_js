const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let tc = Number(input[0]);
for (let i = 0; i < tc; i++) {
  let str = input[i + 1];
  let cnt = (sum = 0);
  for (let j = 0; j < str.length; j++) {
    if (str[j] === "O") {
      cnt++;
      sum += cnt;
    } else {
      cnt = 0;
    }
  }
  console.log(sum);
}
