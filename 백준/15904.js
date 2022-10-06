const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const str = input.shift();
const check = ["U", "C", "P", "C"];
let cur = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === check[cur]) {
    if (cur === 4) break;
    cur++;
  }
}

cur === 4 ? console.log("I love UCPC") : console.log("I hate UCPC");
