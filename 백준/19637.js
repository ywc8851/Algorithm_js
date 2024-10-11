const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const name = input.slice(0, n).map((i) => i.trim().split(" "));
const arr = input.slice(n).map(Number);

let ans = "";

for (let i = 0; i < arr.length; i++) {
  let low = 0;
  let high = name.length - 1;
  let result = high;
  const cur = arr[i];

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (cur <= Number(name[mid][1])) {
      high = mid - 1;
      result = mid;
    } else low = mid + 1;
  }
  ans += name[result][0];
  ans += "\n";
}
console.log(ans);
