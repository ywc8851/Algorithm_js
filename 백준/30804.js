const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const arr = input.shift().split(" ").map(Number);

let left = 0;
let ans = 0;
let kind = 0;
const fruit = new Array(10).fill(0);

for (let right = 0; right < n; right++) {
  const rightFruit = arr[right];
  fruit[rightFruit]++;

  if (fruit[rightFruit] === 1) kind += 1;

  while (kind > 2) {
    const leftFruit = arr[left];
    fruit[leftFruit]--;

    if (fruit[leftFruit] === 0) kind -= 1;

    left += 1;
  }

  ans = Math.max(ans, right - left + 1);
}

console.log(ans);
