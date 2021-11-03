const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let nums = input[1].split(" ").map(Number);

let left = (cnt = ans = 0);

for (let right = 0; right < n; right++) {
  if (nums[right] % 2 === 1) {
    cnt++;
  }
  while (cnt > k) {
    if (nums[left] % 2 === 1) cnt--;
    left++;
  }
  if (cnt <= k) ans = Math.max(ans, right - left - cnt + 1);
}
console.log(ans);
