const fs = require("fs");
const { exit } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let nameCount = Array(26).fill(0);
for (let i = 0; i < input[0].length; i++) {
  nameCount[input[0][i].charCodeAt(0) - 65] += 1;
}
let oddNum = 0;
let oddChar = "";
let char = "";

for (let i = 0; i < 26; i++) {
  if (nameCount[i] % 2 === 1) {
    oddNum++;
    if (oddNum > 1) {
      console.log("I'm Sorry Hansoo");
      exit();
    }
    oddChar += String.fromCharCode(i + 65);
  }
  char += String.fromCharCode(i + 65).repeat(Math.floor(nameCount[i] / 2));
}

console.log(char + oddChar + char.split("").reverse().join(""));
