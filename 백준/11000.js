const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const arr = input.map((i) => i.split(" ").map(Number));

let ans = 0;
let cnt = 0;
const obj = [];

for (let i = 0; i < n; i++) {
  obj.push({ time: arr[i][0], start: 1 });
  obj.push({ time: arr[i][1], start: -1 });
}
obj.sort((a, b) => (a.time === b.time ? a.start - b.start : a.time - b.time));

obj.forEach((classInfo) => {
  if (classInfo.start === -1) cnt -= 1;
  else if (classInfo.start === 1) cnt += 1;

  ans = Math.max(cnt, ans);
});

console.log(ans);
