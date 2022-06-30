const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input[0];

const bdayList = [];
const name = [];
const date = [];

for (let i = 1; i <= n; i++) {
  bdayList.push(input[i].split(" ").reverse());
}

for (let i = 0; i < n; i++) {
  bdayList[i][0] = Number(bdayList[i][0]);
  if (bdayList[i][1].length === 1) bdayList[i][1] = "0" + bdayList[i][1];
  if (bdayList[i][2].length === 1) bdayList[i][2] = "0" + bdayList[i][2];
}

for (let i = 0; i < n; i++) {
  name.push(bdayList[i][3]);
  date.push(Number(bdayList[i].splice(0, 3).join("")));
}

console.log(name[date.indexOf(Math.max(...date))]);
console.log(name[date.indexOf(Math.min(...date))]);
