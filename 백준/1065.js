const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input[0];
const arr = new Array(n + 1).fill(true);

for (let i = 0; i < n + 1; i++) {
  const nums = String(i).split("");
  if (nums.length < 3) {
    continue;
  } else {
    const diff = nums[1] - nums[0];
    for (let j = 1; j < nums.length - 1; j++) {
      if (diff !== nums[j + 1] - nums[j]) {
        arr[i] = false;
        break;
      }
    }
  }
}
console.log(arr.filter((isHanSu) => isHanSu).length - 1);
