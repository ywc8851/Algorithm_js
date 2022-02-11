const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input[1].split(" ").map(Number);

const set = new Set(arr);
const setSorted = [...set].sort((a, b) => a - b);
const obj = {};
const ans = [];

setSorted.forEach((element, index) => (obj[element] = index));

for (let i = 0; i < arr.length; i++) {
  ans.push(obj[arr[i]]);
}

console.log(ans.join(" "));
