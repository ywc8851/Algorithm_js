const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input.shift().split(" ").map(Number);
const arr = input.map((i) => +i);

let low = 0;
let high = arr[arr.length - 1];
let ans = 0;

while (low <= high) {
  let mid = Math.floor((low + high) / 2);
  let cnt = 0;

  for (let i = 0; i < arr.length; i++) {
    cnt += Math.floor(arr[i] / mid);
  }

  if (cnt >= k) {
    low = mid + 1;
    ans = mid;
  } else {
    high = mid - 1;
  }
}

console.log(ans);
