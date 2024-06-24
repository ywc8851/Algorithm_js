const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const arr = input.shift().split(" ").map(Number);
const visited = Array.from({ length: n }, () => false);
const start = +input.shift() - 1;

const queue = [start];
while (queue.length) {
  const cur = queue.shift();
  visited[cur] = true;

  for (const nextPosition of [cur + arr[cur], cur - arr[cur]]) {
    if (nextPosition < 0 || nextPosition >= n) continue;
    else if (!visited[nextPosition]) queue.push(nextPosition);
  }
}
console.log(visited.filter((i) => i === true).length);
