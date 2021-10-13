let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let nums = [1, 5, 10, 50, 100, 500];
let ans = 0;
let m = 1000 - n;
for (let i = nums.length - 1; i >= 0; i--) {
  ans += parseInt(m / nums[i]);
  m %= nums[i];
}
console.log(ans);
