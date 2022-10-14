const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
if (n === k) {
  console.log(0);
  console.log(1);
} else {
  const visited = new Array(100001).fill(false);
  visited[n] = true;
  let queue = [n];
  let time = 0;
  let cnt = 0;

  while (queue.length) {
    const cur = queue.slice();
    queue = [];
    time++;

    for (let x of cur) {
      for (let next of [x + 1, x - 1, x * 2]) {
        if (next === k) cnt++;

        visited[x] = true;
        if (next < 0 || next > 100000) continue;
        if (visited[next]) continue;

        queue.push(next);
      }
    }
    if (cnt) break;
  }

  console.log(`${time}\n${cnt}`);
}
