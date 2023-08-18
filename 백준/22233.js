const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);

const wordSet = new Set(input.map((i) => i.trim()).slice(0, n));
const arr = input.map((i) => i.trim()).slice(n, n + m);

const ans = [];

for (let i = 0; i < m; i++) {
  const words = arr[i].split(",");

  for (let j = 0; j < words.length; j++) {
    wordSet.delete(words[j]);
  }

  ans.push(wordSet.size);
}

console.log(ans.join("\n"));
