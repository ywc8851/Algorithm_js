const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [A, K] = input.shift().split(" ").map(Number);
const visited = Array.from({ length: K }, () => false);

const bfs = () => {
  const queue = [];
  queue.push(A);

  while (queue.length) {
    const num = queue.shift();
    if (num === K) return visited[num];

    for (const nextNum of [num + 1, num * 2]) {
      if (nextNum <= K && !visited[nextNum]) {
        queue.push(nextNum);
        visited[nextNum] = visited[num] + 1;
      }
    }
  }

  return 0;
};

console.log(bfs());
