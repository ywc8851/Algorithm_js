const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [num1, num2] = input[0].split(":").map((n) => Number(n));

const getGCD = (a, b) => {
  const remainder = a % b;
  if (remainder === 0) return b;
  return getGCD(b, remainder);
};
let gcd = getGCD(num1, num2);

console.log(`${num1 / gcd}:${num2 / gcd}`);
