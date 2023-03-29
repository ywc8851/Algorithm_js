const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [B, C, D] = input.shift().split(" ").map(Number);
const burger = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
const side = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
const drink = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
const setNum = Math.min(B, C, D);
const beforeSale =
  burger.reduce((a, b) => a + b) +
  side.reduce((a, b) => a + b) +
  drink.reduce((a, b) => a + b);

let afterSale = 0;

for (let i = 0; i < setNum; i++) {
  afterSale += burger[i] * 0.9;
  afterSale += side[i] * 0.9;
  afterSale += drink[i] * 0.9;
}
for (let i = setNum; i < burger.length; i++) afterSale += burger[i];

for (let i = setNum; i < side.length; i++) afterSale += side[i];

for (let i = setNum; i < drink.length; i++) afterSale += drink[i];

console.log(`${beforeSale}\n${afterSale}`);
