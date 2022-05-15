const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const cnt = Array(N + 1).fill(1);
const visited = new Array(N + 1).fill(false);
const graph = Array.from(Array(N + 1), () => Array().fill([]));
const result = [];

input.map(i => {
  const [from, to] = i.split(" ").map(Number);
  graph[to].push(from);
});

const DFS = (cntComputer, nextComputer) => {
  visited[nextComputer] = true;
  if (graph[nextComputer].length === 0) return;

  for (let i = 0; i < graph[nextComputer].length; i++) {
    const next = graph[nextComputer][i];
    if (!visited[next]) {
      cnt[cntComputer]++;
      DFS(cntComputer, next);
    }
  }
};

for (let i = 1; i <= N; i++) {
  DFS(i, i);
  visited.fill(false);
}
const max = Math.max(...cnt);
cnt.forEach((val, idx) => {
  if (val === max) result.push(idx);
});

console.log(result.join(" "));
