const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, r] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);
input.forEach((i) => {
  const [from, to] = i.split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
});

graph.forEach((g) => g.sort((a, b) => b - a));
const visited = Array.from({ length: n + 1 }, () => false);
const ans = Array.from({ length: n + 1 }, () => 0);
let visitCnt = 1;

const dfs = (n) => {
  if (visited[n]) return;

  visited[n] = true;
  ans[n] = visitCnt;
  visitCnt += 1;

  if (graph[n].length === 0) return;
  else {
    for (const childNode of graph[n]) {
      dfs(childNode);
    }
  }
};

dfs(r);
console.log(ans.slice(1).join(" "));
