const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let visit = Array.from({ length: 101 }, () =>
  Array.from({ length: 101 }, () => false)
);
let ans = 0;

input.slice(1).forEach((i) => {
  const [x, y] = i.split(" ").map(Number);
  for (let i = x; i < x + 10; i++) {
    for (let j = y; j < y + 10; j++) {
      if (visit[i][j]) continue;

      visit[i][j] = true;
      ans++;
    }
  }
});

console.log(ans);
