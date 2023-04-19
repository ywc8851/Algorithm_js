const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const visited = new Array(n).fill(false);
const ans = [];

let cur = 1;
while (1) {
  if (ans.length === n) break;
  let cnt = 1;

  while (1) {
    if (cur > n) cur = 1;
    if (cnt === k && !visited[cur - 1]) {
      ans.push(cur);
      visited[cur - 1] = true;
      cur += 1;
      break;
    }

    if (!visited[cur - 1]) cnt += 1;

    cur += 1;
  }
}

console.log(`<${ans.join(", ")}>`);
