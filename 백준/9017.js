const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const tc = +input.shift();
for (let i = 0; i < tc; i++) {
  const n = +input.shift();
  const arr = input.shift().split(" ").map(Number);
  const cnt = new Map();
  const score = new Map();

  for (let j = 0; j < arr.length; j++) {
    cnt.set(arr[j], (cnt.get(arr[j]) || 0) + 1);
  }

  let grade = 1;

  for (let k = 0; k < arr.length; k++) {
    const cur = arr[k];

    if (cnt.get(cur) !== 6) continue;

    score.set(cur, [...(score.get(cur) || []), grade]);
    grade += 1;
  }

  let winner = Infinity;
  let curSum = Infinity;
  let curTie = Infinity;

  for (const [team, points] of score.entries()) {
    const sum = points.slice(0, 4).reduce((a, b) => a + b, 0);
    const tie = points[4];

    if (curSum > sum || (curSum === sum && curTie > tie)) {
      winner = team;
      curTie = tie;
      curSum = sum;
    }
  }
  console.log(winner);
}
