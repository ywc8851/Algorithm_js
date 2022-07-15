const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const arr = input.map((i) => i.trim());
const map = new Map();

arr.map((str) => {
  const strArr = str.trim().split(".");
  map.set(strArr[1], (map.get(strArr[1]) || 0) + 1);
});
const mapSort = [...map].sort();
let result = "";

mapSort.map((r) => {
  result += `${r[0]} ${r[1]}\n`;
});

console.log(result);
