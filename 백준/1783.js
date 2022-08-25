const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);

if (n === 1) {
  console.log(1);
} else if (n === 2) {
  console.log(Math.min(4, parseInt((m + 1) / 2)));
} else {
  if (m <= 6) {
    console.log(Math.min(4, m));
  } else {
    console.log(m - 2);
  }
}
