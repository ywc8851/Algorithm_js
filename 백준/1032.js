const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
let ans = "";

for (let i = 0; i < input[0].length; i++) {
  let char = input[0][i];
  let flag = true;
  for (let j = 0; j < input.length; j++) {
    if (char !== input[j][i]) {
      flag = false;
      break;
    }
  }
  if (flag) ans += char;
  else ans += "?";
}
console.log(ans);
