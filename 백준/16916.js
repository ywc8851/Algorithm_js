const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const firstStr = input[0];
const secondStr = input[1];

const KMP = (text, pattern) => {
  const pLen = pattern.length;
  const table = new Array(pLen).fill(0);
  for (let i = 1, j = 0; i < pLen; i++) {
    while (j > 0 && pattern[i] !== pattern[j]) {
      j = table[j - 1];
    }

    if (pattern[i] === pattern[j]) table[i] = ++j;
  }

  for (let i = 0, j = 0; i < text.length; i++) {
    while (j > 0 && text[i] !== pattern[j]) {
      j = table[j - 1];
    }

    if (text[i] === pattern[j]) {
      if (j === pLen - 1) {
        return true;
        j = table[j];
      } else {
        j++;
      }
    }
  }
  return false;
};

KMP(firstStr, secondStr) ? console.log(1) : console.log(0);
