const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let str = input[0];
// 정규표현식으로 풀기
var regex = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;
let result = str.replace(regex, " ");
// console.log(result.length)

// 조건문으로 풀기
let cnt = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === "c" && (str[i + 1] === "=" || str[i + 1] === "-")) {
    i += 1;
    cnt++;
  } else if (str[i] === "d" && str[i + 1] === "z" && str[i + 2] === "=") {
    i += 2;
    cnt++;
  } else if (str[i] === "d" && str[i + 1] === "-") {
    i += 1;
    cnt++;
  } else if (str[i + 1] === "j" && (str[i] === "l" || str[i] === "n")) {
    i += 1;
    cnt++;
  } else if (str[i] === "s" && str[i + 1] === "=") {
    i += 1;
    cnt++;
  } else if (str[i] === "z" && str[i + 1] === "=") {
    i += 1;
    cnt++;
  } else {
    cnt++;
  }
}
console.log(cnt);
