const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let minPackagePrice = (minOnePrice = Infinity);

for (let i = 0; i < m; i++) {
  const [packagePrice, onePrice] = input[i + 1].split(" ").map(Number);
  minPackagePrice = Math.min(minPackagePrice, packagePrice);
  minOnePrice = Math.min(minOnePrice, onePrice);
}

let ans = Math.min(
  minOnePrice * n,
  Math.floor(n / 6) * minPackagePrice + (n % 6) * minOnePrice,
  Math.ceil(n / 6) * minPackagePrice
);
console.log(ans);
