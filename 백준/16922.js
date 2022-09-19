const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const arr = [1, 5, 10, 50];

let cnt = 1;
let answer = [1, 5, 10, 50];
while (cnt < n) {
  let temp = [];
  arr.forEach((v) => {
    for (let i = 0; i < answer.length; i++) {
      temp.push(answer[i] + v);
    }
  });

  answer = [...new Set(temp)];
  cnt++;
}

console.log(answer.length);
