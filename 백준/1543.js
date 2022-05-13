const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const str = input.shift();
const find = input.shift();

let idx = 0;
let cnt = 0;

while (idx < str.length) {
  const newIdx = str.slice(idx).search(find);
  if (newIdx >= 0) {
    cnt++;
    idx += newIdx + find.length;
  } else break;
}

console.log(cnt);
