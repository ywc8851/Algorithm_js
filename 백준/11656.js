let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let str = input[0];
let arr = new Array(str.length);
for (let i = str.length - 1; i >= 0; i--) {
  arr.push(str.substr(i, str.length));
}
arr.sort();
for (let i = 0; i < str.length; i++) {
  console.log(arr[i]);
}
