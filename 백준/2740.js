const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [row, col] = input.shift().split(" ").map(Number);
const arr1 = input.splice(0, row).map((i) => i.split(" ").map(Number));
[row, col] = input.shift().split(" ").map(Number);
const arr2 = input.splice(0, row).map((i) => i.split(" ").map(Number));
let ans = [];

for (let i = 0; i < arr1.length; i++) {
  let value = [];
  for (let j = 0; j < arr2[0].length; j++) {
    let multiplication = arr1[i].map((el, idx) => el * arr2[idx][j]);
    let sum = multiplication.reduce((past, curr) => past + curr, 0);
    value.push(sum);
  }
  ans.push(value.join(" "));
}
console.log(ans.join("\n"));
