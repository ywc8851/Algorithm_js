const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [A, P] = input.shift().split(" ").map(Number);
const arr = [A];
let ans = 0;

const calc = (num) => {
  const numArr = String(num).split("").map(Number);
  let afterCalcNum = 0;
  numArr.forEach((num) => {
    afterCalcNum += Math.pow(num, P);
  });

  return afterCalcNum;
};

while (1) {
  const curNum = arr[arr.length - 1];
  const nextNum = calc(curNum);

  if (arr.includes(nextNum)) {
    ans = arr.indexOf(nextNum);
    break;
  } else {
    arr.push(nextNum);
  }
}

console.log(ans);
