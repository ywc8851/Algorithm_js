const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, start] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);
const visited = new Array(n + 1).fill(false);
const ans = new Array(n + 1).fill(0);

input.map((i) => {
  const [from, to] = i.split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
});

graph.forEach((graphInfo) => {
  graphInfo.sort((a, b) => b - a);
});

const queue = [start];
visited[start] = true;
let cnt = 1;

while (queue.length) {
  const cur = queue.shift();
  ans[cur] = cnt++;

  for (const x of graph[cur]) {
    if (visited[x]) continue;

    visited[x] = true;
    queue.push(x);
  }
}

console.log(ans.slice(1).join("\n"));
