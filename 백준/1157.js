const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let str = input[0];
str = str.toUpperCase();
let hash_map = new Map();
for (let i = 0; i < str.length; i++) {
  hash_map.set(str[i], (hash_map.get(str[i]) || 0) + 1);
}
const hash_map_sort = new Map(
  [...hash_map.entries()].sort((a, b) => b[1] - a[1])
);

let max = 0;
let ans = "";
for (let [k, v] of hash_map_sort) {
  if (v === max) {
    ans = "?";
    break;
  }
  if (v > max) ans = k;
  max = Math.max(v, max);
}
console.log(ans);
