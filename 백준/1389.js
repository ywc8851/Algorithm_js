const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const info = input.map(i => i.split(" ").map(Number));
const graph = Array.from({ length: n + 1 }, () => []);
const cnt = Array.from({ length: n + 1 }, () => 0);

info.forEach(i => {
  graph[i[0]].push(i[1]);
  graph[i[1]].push(i[0]);
});

const bfs = start => {
  const visited = Array.from({ length: n + 1 }, () => 0);
  let queue = [[start, 0]];
  visited[start] = 1;

  while (queue.length) {
    let [cur, level] = queue.shift();

    for (let i = 0; i < graph[cur].length; i++) {
      const next = graph[cur][i];
      if (!visited[next]) {
        visited[next] = 1;
        cnt[start] += level + 1;
        queue.push([next, level + 1]);
      }
    }
  }
};

for (let i = 1; i <= n; i++) {
  bfs(i);
}

cnt.shift();
console.log(cnt.indexOf(Math.min(...cnt)) + 1);
