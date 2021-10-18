let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);
let arr = new Array(n);
arr = input[1].split(" ").map(Number);
let right = Math.max(...arr);
let left = 1;
let answer = 0;
let money = Number(input[2]);
while (left <= right) {
  let mid = parseInt((right + left) / 2);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= mid) {
      sum += arr[i];
    } else {
      sum += mid;
    }
  }
  if (sum <= money) {
    left = mid + 1;
    answer = Math.max(answer, mid);
  } else {
    right = mid - 1;
  }
}
console.log(answer);
