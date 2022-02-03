const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const wordNums = input.shift().split(" ").map(Number);
const words = input.map((word, index) => [word.trim().length, word.trim()]);

words.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] > b[1] ? 1 : -1));

console.log(words[0][1]);
for (let i = 1; i < words.length; i++) {
  if (words[i][1] !== words[i - 1][1]) console.log(words[i][1]);
}
