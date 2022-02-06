const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [E, S, M] = input[0].split(" ").map(Number);

let num = 1;
while (1) {
  if ((num - E) % 15 === 0 && (num - S) % 28 === 0 && (num - M) % 19 === 0) {
    console.log(num);
    process.exit();
  }
  num++;
}
