const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const nums = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const ansArr = Array.from({ length: 3 }, () => 0);
let ans = Infinity;

for (let i = 0; i < N - 2; i++) {
  let left = i + 1;
  let right = N - 1;
  while (left < right) {
    const sum = nums[i] + nums[left] + nums[right];
    if (Math.abs(sum) < ans) {
      ans = Math.abs(sum);
      ansArr[0] = nums[i];
      ansArr[1] = nums[left];
      ansArr[2] = nums[right];
    }
    if (sum < 0) left++;
    else right--;
  }
}

console.log(ansArr.join(" "));
