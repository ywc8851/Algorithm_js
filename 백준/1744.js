const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let plus_arr = [];
let minus_arr = [];
let ans = 0;
let has_zero = false;
for (let i = 0; i < n; i++) {
  if (Number(input[i + 1]) === 1) {
    ans++;
  } else if (Number(input[i + 1]) === 0) {
    has_zero = true;
  } else if (Number(input[i + 1]) < 0) {
    minus_arr.push(Number(input[i + 1]));
  } else {
    plus_arr.push(Number(input[i + 1]));
  }
}

plus_arr.sort((a, b) => b - a);
minus_arr.sort((a, b) => a - b);

if (has_zero && minus_arr.length % 2 === 1) {
  minus_arr.pop();
}
if (plus_arr.length % 2 === 1) {
  ans += plus_arr[plus_arr.length - 1];
  plus_arr.pop();
}
if (minus_arr.length % 2 === 1) {
  ans += minus_arr[minus_arr.length - 1];
  minus_arr.pop();
}

for (let i = 0; i < plus_arr.length; i += 2) {
  ans += plus_arr[i] * plus_arr[i + 1];
}
for (let i = 0; i < minus_arr.length; i += 2) {
  ans += minus_arr[i] * minus_arr[i + 1];
}

console.log(ans);
