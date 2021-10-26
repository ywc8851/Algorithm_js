const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, c] = input[0].split(" ").map(Number);
let arr = [];

for (let i = 0; i < n; i++) {
  arr.push(Number(input[i + 1]));
}
arr.sort((a, b) => a - b);

let left = 0;
let right = arr[arr.length - 1];
let ans = 0;

while (left <= right) {
  let cnt = 1;
  let mid = parseInt((left + right) / 2);
  let cur = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - cur >= mid) {
      cnt++;
      cur = arr[i];
    }
  }
  if (cnt >= c) {
    if (ans < mid) ans = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}
console.log(ans);
