const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const arr = input.shift().split(" ").map(Number);
let ans = 0;
const solve = (n, arr) => {
  const tmp = [];
  let broke = -1;
  let min = Infinity;

  for (let i = n - 1; i >= 0; i--) {
    if (min < arr[i]) {
      broke = i;
      break;
    }
    tmp.push(arr[i]);
    min = arr[i];
  }
  if (broke === -1) return -1;
  for (let i = 0; i < tmp.length; i++) {
    if (arr[broke] > tmp[i]) {
      let change = tmp.splice(i, 1, arr[broke]);
      arr[broke] = change.join("");
      break;
    }
  }
  return arr.slice(0, broke + 1).join(" ") + " " + tmp.join(" ");
};
ans = solve(n, arr);
console.log(ans);
