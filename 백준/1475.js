const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = input[0].split("").map(Number);
const cnt = Array.from({ length: 10 }, () => 0);

num.forEach((n) => {
  if (n === 6) {
    if (cnt[n] > cnt[9]) cnt[9]++;
    else cnt[n]++;
  } else if (n === 9) {
    if (cnt[n] > cnt[6]) cnt[6]++;
    else cnt[n]++;
  } else cnt[n]++;
});

console.log(Math.max(...cnt));
