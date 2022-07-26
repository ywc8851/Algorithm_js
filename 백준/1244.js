const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const status = input.shift().split(" ").map(Number);
const students = +input.shift();
const info = input.map((i) => i.trim().split(" ").map(Number));

for (let i = 0; i < info.length; i++) {
  const num = info[i][1];

  if (info[i][0] === 1) {
    // 남자
    for (let j = 0; j < n; j++) {
      if ((j + 1) % num === 0) {
        status[j] = status[j] === 1 ? 0 : 1;
      }
    }
  } else {
    // 여자
    status[num - 1] = status[num - 1] === 1 ? 0 : 1;
    for (let j = 1; j <= n; j++) {
      if (
        num - j > 0 &&
        num + j < n + 1 &&
        status[num - 1 - j] === status[num - 1 + j]
      ) {
        status[num - 1 - j] = status[num - 1 - j] === 1 ? 0 : 1;
        status[num - 1 + j] = status[num - 1 - j];
      } else break;
    }
  }
}

let tmp = [];

for (let i = 0; i < n; i++) {
  tmp.push(status[i]);
  if (tmp.length === 20) {
    console.log(tmp.join(" "));
    tmp = [];
  }
}
console.log(tmp.join(" "));
