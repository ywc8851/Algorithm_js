const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const tc = +input.shift();
for (let i = 0; i < tc; i++) {
  const day = +input.shift();
  const arr = input.shift().split(" ").map(Number);

  let curMaxVal = arr[day - 1];
  let ans = 0;

  for (let j = day - 2; j > -1; j--) {
    if (curMaxVal > arr[j]) {
      ans += curMaxVal - arr[j];
    } else {
      curMaxVal = arr[j];
    }
  }
  console.log(ans);
}
