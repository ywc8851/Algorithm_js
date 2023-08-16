const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input
  .slice(1)
  .map((i) => i.trim())
  .sort((a, b) => a.length - b.length);

const ans = [];
for (let i = 0; i < arr.length; i++) {
  const cur = arr[i];
  let canAns = true;

  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j].startsWith(cur)) {
      canAns = false;
      break;
    }
  }

  if (canAns) ans.push(cur);
}

console.log(ans.length);
