const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const color = new Array(4).fill(0); // RBYG
const number = new Array(10).fill(0);
let maxNum = 0;
let pair1 = (pair2 = triple = quad = 0);

input.map((el) => {
  const [char, num] = el.trim().split(" ");
  if (char === "R") color[0]++;
  else if (char === "B") color[1]++;
  else if (char === "Y") color[2]++;
  else color[3]++;

  number[Number(num)]++;
  maxNum = Math.max(maxNum, Number(num));
});

number.forEach((cnt, idx) => {
  if (cnt === 2) {
    if (pair1 > 0) pair2 = idx;
    else pair1 = idx;
  } else if (cnt === 3) triple = idx;
  else if (cnt === 4) quad = idx;
});

const isFlush =
  color[0] == 5 || color[1] == 5 || color[2] == 5 || color[3] == 5;
let isStraight = false;

for (let i = 1; i <= 6; i++) {
  if (
    number[i] &&
    number[i + 1] &&
    number[i + 2] &&
    number[i + 3] &&
    number[i + 4]
  ) {
    isStraight = true;
  }
}
let ans = 0;

if (isFlush && isStraight) ans = 900 + maxNum;
else if (isFlush) ans = 600 + maxNum;
else if (isStraight) ans = 500 + maxNum;
else if (quad != 0) ans = 800 + quad;
else if (triple != 0 && pair1 != 0) ans = 700 + 10 * triple + pair1;
else if (triple != 0) ans = 400 + triple;
else if (pair1 != 0 && pair2 != 0)
  ans = 300 + 10 * Math.max(pair1, pair2) + Math.min(pair1, pair2);
else if (pair1 != 0) ans = 200 + pair1;
else ans = 100 + maxNum;

console.log(ans);
