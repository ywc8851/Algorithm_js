const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const tc = +input.shift();
for (let i = 0; i < tc; i++) {
  input.shift();
  const arr1 = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  input.shift();
  const arr2 = input.shift().split(" ").map(Number);

  const ans = [];
  arr2.forEach((num) => {
    let min = 0;
    let max = arr1.length - 1;
    let mid;
    let isCorrect = false;
    while (min <= max) {
      mid = Math.floor((min + max) / 2);
      if (arr1[mid] === num) {
        isCorrect = true;
        break;
      } else if (arr1[mid] < num) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }
    isCorrect ? ans.push(1) : ans.push(0);
  });

  console.log(ans.join("\n"));
}
