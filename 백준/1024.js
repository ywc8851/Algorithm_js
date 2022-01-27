const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, l] = input[0].split(" ").map(Number);
let ans = [];

for (let i = l; i < 101; i++) {
  const x = n - (i * (i - 1)) / 2;
  const min = (n - (i * (i - 1)) / 2) / i;

  if (x % i !== 0) continue;
  if (min < 0) continue;

  for (let j = 0; j < i; j++) {
    ans.push(min + j);
  }

  break;
}

if (!ans.length) console.log(-1);
else console.log(ans.join(" "));
