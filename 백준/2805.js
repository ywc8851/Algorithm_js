let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0].split(" ")[0]);
let m = Number(input[0].split(" ")[1]);
let arr = input[1].split(" ").map(Number);
let left = 0;
let right = 2000000000;
let ans = 0;

while (left <= right) {
  let mid = parseInt((left + right) / 2);
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > mid) {
      cnt += arr[i] - mid;
    }
  }
  if (cnt >= m) {
    left = mid + 1;
    ans = Math.max(ans, mid);
  } else {
    right = mid - 1;
  }
}
console.log(ans);
