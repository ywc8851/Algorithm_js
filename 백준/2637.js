const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let m = Number(input[1]);
let graph = new Array(n + 1);
for (let i = 0; i < graph.length; i++) {
  graph[i] = [];
}
let indegrees = new Array(n + 1).fill(0);
let cnt = new Array(n + 1).fill(0);
for (let i = 0; i < m; i++) {
  let [x, y, k] = input[i + 2].split(" ").map(Number);
  graph[y].push([x, k]);
  indegrees[x]++;
}
let queue = [];
let ans = [];
let blocks = new Array(n + 1);
for (let i = 0; i < blocks.length; i++) {
  blocks[i] = new Array(n + 1).fill(0);
}
for (let i = 1; i <= n; i++) {
  if (!indegrees[i]) {
    queue.push(i);
    blocks[i][i] = 1;
  }
}
while (queue.length) {
  let cur = queue.shift();
  for (let next of graph[cur]) {
    for (let i = 1; i <= n; i++) {
      blocks[next[0]][i] += blocks[cur][i] * next[1];
    }
    indegrees[next[0]]--;
    if (!indegrees[next[0]]) {
      queue.push(next[0]);
    }
  }
}
for (let i = 1; i <= n; i++) {
  if (blocks[n][i]) {
    console.log(i, blocks[n][i]);
  }
}
