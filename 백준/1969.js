const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const ans = new Array(m);
let cnt = 0;

for (let i = 0; i < m; i++) {
  const map = new Map();
  for (let j = 0; j < n; j++) {
    map.set(input[j][i], (map.get(input[j][i]) || 0) + 1);
  }
  const mapArr = [...map].sort((a, b) => {
    if (b[1] === a[1]) return a[0] > b[0] ? 1 : -1;
    return b[1] > a[1] ? 1 : -1;
  });
  const [ansDNA, ansCnt] = mapArr[0];
  ans[i] = ansDNA;
  cnt += n - ansCnt;
}
console.log(`${ans.join("")}\n${cnt}`);
