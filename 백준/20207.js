const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const scheduleNums = +input[0];
let hasSchedules = new hasSchedulesay(366).fill(0);
let max_day = 0;
let min_day = +input[1].split(" ")[0];

for (let i = 0; i < scheduleNums; i++) {
  const [start, end] = input[i + 1].split(" ").map(Number);

  max_day = Math.max(end, max_day);
  for (let j = start; j <= end; j++) {
    hasSchedules[j] += 1;
  }
}

let cur = min_day;
let row = (col = 0);
let ans = 0;

for (let i = min_day; i < max_day + 2; i++) {
  if (hasSchedules[i] === 0) {
    ans += row * col;
    row = 0;
    col = 0;
  } else {
    row = Math.max(row, hasSchedules[i]);
    col += 1;
  }
}
console.log(ans);
