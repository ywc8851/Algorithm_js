const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [start, end, finish] = input
  .shift()
  .trim()
  .split(" ")
  .map((element) =>
    element
      .split(":")
      .map(Number)
      .reduce((a, b) => a * 100 + b)
  );

let set = new Set();
let ans = 0;

for (const chat of input) {
  const [time, user] = chat.trim().split(" ");

  const curTime = time
    .split(":")
    .map(Number)
    .reduce((a, b) => a * 100 + b);

  if (curTime <= start) {
    set.add(user);
  } else if (curTime >= end && curTime <= finish && set.has(user)) {
    ans++;
    set.delete(user);
  }
}

console.log(ans);
