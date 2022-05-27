const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let nums = input[1].split(" ").map(Number);
nums.sort((a, b) => a - b);
let m = Number(input[2]);
let ans = new Array(m).fill(0);

let find = input[3].split(" ").map(Number);
for (let i = 0; i < m; i++) {
  let left = 0;
  let right = n - 1;
  let find_num = find[i];
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (nums[mid] === find_num) {
      ans[i] = 1;
      break;
    }
    if (nums[mid] > find_num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
}
console.log(ans.join("\n"));
