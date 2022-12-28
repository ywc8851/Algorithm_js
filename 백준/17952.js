const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const hwStack = [];
let ans = 0;

for (let i = 0; i < n; i++) {
  const hwInfo = input[i].split(" ").map(Number);
  if (hwInfo[0]) {
    const [hwScore, hwTime] = [hwInfo[1], hwInfo[2]];
    if (hwTime === 1) ans += hwScore;
    else hwStack.push([hwScore, hwTime - 1]);
  } else if (hwStack.length) {
    hwStack[hwStack.length - 1][1]--;
    if (hwStack[hwStack.length - 1][1] === 0) {
      ans += hwStack[hwStack.length - 1][0];
      hwStack.pop();
    }
  }
}

console.log(ans);
