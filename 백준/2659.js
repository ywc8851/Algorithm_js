const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const nums = input[0].split(" ").map(Number);
const clockNums = [];

for (let i = 0; i < nums.length; i++) {
  let clockNum = Number(nums.join(""));
  nums.push(nums.shift());
  clockNums.push(clockNum);
}

const curClockNum = clockNums.sort()[0];
const set = new Set();

for (let i = 1111; i <= 9999; i++) {
  let s = String(i).split("");
  if (s.indexOf("0") !== -1) continue;
  let clockNum = parseInt(s.join(""));
  for (let j = 0; j < 4; j++) {
    s.push(s.shift());
    clockNum = Math.min(clockNum, parseInt(s.join("")));
  }
  set.add(clockNum);
}

const allClockNums = Array.from(set);
for (let i = 0; i < allClockNums.length; i++) {
  if (curClockNum === allClockNums[i]) {
    console.log(i + 1);
    break;
  }
}
