const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let arr = [];
let cnt = 0;
let [maxNum, findNum] = input[0].split(" ").map(Number);

for (let i = 0; i <= maxNum; i++) {
  arr.push(i);
}

const solved = () => {
  for (let i = 2; i <= maxNum; i++) {
    for (let j = i; j <= maxNum; j += i) {
      if (arr[j] === 0) continue;
      arr[j] = 0;
      cnt += 1;
      if (cnt === findNum) {
        console.log(j);
        return;
      }
    }
  }
};

solved();
