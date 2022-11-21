const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [nodeNum, edgeNum, start] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: nodeNum + 1 }, () => []);
const visited = Array.from({ length: nodeNum + 1 }, () => false);
const ans = new Array(nodeNum).fill(0);

input.forEach((i) => {
  const [from, to] = i.split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
});
graph.forEach((g) => g.sort((a, b) => a - b));

let cnt = 1;
const dfs = (node) => {
  visited[node] = true;
  ans[node - 1] = cnt;
  cnt++;

  for (const next of graph[node]) {
    if (visited[next]) continue;

    dfs(next);
  }
};

dfs(start);

console.log(ans.join("\n"));
