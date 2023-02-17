const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = +input.shift();
let i = 1;

while (n > i) {
  n -= i;
  i++;
}

if (i % 2 === 1) console.log(`${i + 1 - n}/${n}`);
else console.log(`${n}/${i + 1 - n}`);
