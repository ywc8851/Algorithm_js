const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, newScore, rankMaxLength] = input[0].split(" ").map(Number);
let ans = 1;

if (input.length === 2) {
  const ranking = input[1].split(" ").map(Number);
  const minScore = Math.min(...ranking);

  if (minScore > newScore) {
    ans = rankMaxLength <= n ? -1 : n + 1;
  } else if (minScore === newScore && rankMaxLength <= n) ans = -1;
  else {
    for (let i = 0; i < n; i++) {
      if (ranking[i] > newScore) ans++;
      else break;
    }
  }
} else {
  ans = 1;
}

console.log(ans);
