const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const a = input.slice(0, n).map((i) => i.trim().split("").map(Number));
const b = input.slice(n).map((i) => i.trim().split("").map(Number));

let ans = 0;
for (let i = 0; i < n - 2; i++) {
  for (let j = 0; j < m - 2; j++) {
    if (a[i][j] != b[i][j]) {
      for (let k = i; k <= i + 2; k++) {
        for (let l = j; l <= j + 2; l++) {
          a[k][l] = 1 - a[k][l];
        }
      }
      ans += 1;
    } else continue;
  }
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (a[i][j] != b[i][j]) {
      ans = -1;
      break;
    }
  }
}

console.log(ans);
