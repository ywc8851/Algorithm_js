const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(+input[i + 1]);
}

let left = 0;
let right = arr.reduce((a, b) => a + b);
let ans = Infinity;

while (left <= right) {
  let mid = parseInt((left + right) / 2);
  let cur = mid;
  let cnt = 1;
  let impossible = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > mid) {
      impossible = true;
      break;
    }
    if (cur - arr[i] < 0) {
      cur = mid;
      cnt++;
    }

    cur -= arr[i];
  }

  if (cnt > m || impossible) left = mid + 1;
  else {
    right = mid - 1;
    ans = mid;
  }
}

console.log(ans);
