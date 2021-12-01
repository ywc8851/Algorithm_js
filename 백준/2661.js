const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let flag = false;
let ans = "";
function DFS(str) {
  for (let i = 1; i <= str.length / 2; i++) {
    for (let j = 0; j <= str.length - 2 * i; j++) {
      if (str.substr(j, i) === str.substr(j + i, i)) {
        return;
      }
    }
  }
  if (str.length === n) {
    ans = str;
    flag = true;
    return;
  }
  for (let i = 1; i <= 3; i++) {
    if (flag) return;
    DFS(str + String(i));
  }
}
for (let i = 0; i < 3; i++) {
  if (flag) return;
  DFS(String(i + 1));
  console.log(ans);
}
