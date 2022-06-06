const fs = require("fs");
const { exit } = require("process");
const { deflateSync } = require("zlib");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: n }, () => []);
input.map((i) => {
  const [from, to] = i.split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
});
const visited = Array.from({ length: n }, () => false);

const dfs = (depth, cur) => {
  visited[cur] = true;
  if (depth === 4) {
    console.log(1);
    exit();
  }

  for (let i = 0; i < graph[cur].length; i++) {
    let next = graph[cur][i];
    if (!visited[next]) dfs(depth + 1, next);
  }
  visited[cur] = false;
};

for (let i = 0; i < n; i++) {
  visited.fill(false);
  dfs(0, i);
}
console.log(0);
