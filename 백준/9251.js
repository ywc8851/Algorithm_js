const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const firstStr = input[0];
const secondStr = input[1];
const n = firstStr.length;
const m = secondStr.length;

const lcs = Array.from(Array(n + 1), () => new Array(m + 1).fill(0));

for (let i = 0; i < n; i++) {
  const char = firstStr[i];
  for (let j = 0; j < m; j++) {
    if (char === secondStr[j]) {
      lcs[i + 1][j + 1] = lcs[i][j] + 1;
    } else {
      lcs[i + 1][j + 1] = Math.max(lcs[i][j + 1], lcs[i + 1][j]);
    }
  }
}

console.log(lcs[n][m]);
