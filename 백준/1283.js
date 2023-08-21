const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

let ans = "";
const alphabet = new Set();
input.forEach((str) => {
  let first = [];
  let not = [];
  for (let i in str) {
    i = +i;
    if (!alphabet.has(str[i])) {
      if (i === 0 || str[i - 1] === " ") first.push(i);
      else if (str[i] !== " ") not.push(i);
    }
  }

  if (first.length > 0 || not.length > 0) {
    const border = first.length ? first[0] : not[0];

    ans += `${str.slice(0, border)}[${str[border]}]${str.slice(border + 1)}\n`;
    alphabet.add(str[border].toUpperCase());
    alphabet.add(str[border].toLowerCase());
  } else {
    ans += str + "\n";
  }
});
console.log(ans.trim());
