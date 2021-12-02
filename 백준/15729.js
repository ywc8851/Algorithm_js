const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let goal = input[1].split(" ").map(Number);

let arr = new Array(n).fill(0);
let cnt = new Array(n).fill(0);
let ans = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== goal[i] && cnt[i] % 2 === 0) {
    for (let j = 1; j <= 2; j++) {
      cnt[i + j]++;
    }
    ans++;
  }
  if (arr[i] === goal[i] && cnt[i] % 2 === 1) {
    for (let j = 1; j <= 2; j++) {
      cnt[i + j]++;
    }
    ans++;
  }
}
console.log(ans);
