const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const money = +input.shift();
const max_5coin = Math.floor(money / 5);
let isPossible = false;
for (let i = max_5coin; i >= 0; i--) {
  let restMoney = money - i * 5;
  if (restMoney % 2 === 0) {
    isPossible = true;
    console.log(i + restMoney / 2);
    break;
  }
}
if (!isPossible) console.log(-1);
