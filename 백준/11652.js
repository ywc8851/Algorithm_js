const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const map = new Map();
const [, ...numbers] = input.map((i) => BigInt(i));

numbers.forEach((num) => {
  map.set(num, (map.get(num) || 0) + 1);
});

let sorted = [...map].sort((a, b) => {
  if (b[1] < a[1]) return -1;
  else if (b[1] > a[1]) return 1;
  else {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    else return 0;
  }
});

console.log(String(sorted[0][0]));
