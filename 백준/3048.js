const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const arr1 = input.shift().trim().split("");
const arr2 = input.shift().trim().split("");
const time = +input.shift();
const start = [...arr1.reverse(), ...arr2];
let cnt = 0;

while (cnt !== time) {
  for (let i = 0; i < n + m - 1; i++) {
    if (arr1.includes(start[i]) && arr2.includes(start[i + 1])) {
      [start[i], start[i + 1]] = [start[i + 1], start[i]];
      i++;
    }
  }
  cnt++;
}

console.log(start.join(""));
