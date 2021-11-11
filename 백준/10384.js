const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let tc = Number(input[0]);

for (let i = 0; i < tc; i++) {
  let arr = new Array(26).fill(0);
  let str = input[i + 1];
  str = str.toUpperCase();
  for (let j = 0; j < str.length; j++) {
    if (str[j] >= "A" && str[j] <= "Z") {
      arr[str.charCodeAt(j) - 65]++;
    }
  }
  let cnt = Math.min(...arr);
  if (cnt === 0) {
    console.log(`Case ${i + 1}: Not a pangram`);
  } else if (cnt === 1) {
    console.log(`Case ${i + 1}: Pangram!`);
  } else if (cnt === 2) {
    console.log(`Case ${i + 1}: Double pangram!!`);
  } else {
    console.log(`Case ${i + 1}: Triple pangram!!!`);
  }
}
