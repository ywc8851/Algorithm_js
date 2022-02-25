const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const graph = Array.from(Array(N + 1), () => []);
const visited = Array.from(Array(N + 1), () => false);
const parentNode = Array.from(Array(N + 1), () => 0);

for (let i = 0; i < N - 1; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

function bfs() {
  let queue = [];
  queue.push(1);
  visited[1] = true;

  while (queue.length) {
    const qlen = queue.length;
    for (let i = 0; i < qlen; i++) {
      const cur = queue.shift();
      for (let j = 0; j < graph[cur].length; j++) {
        if (!visited[graph[cur][j]]) {
          visited[graph[cur][j]] = true;
          parentNode[graph[cur][j]] = cur;
          queue.push(graph[cur][j]);
        }
      }
    }
  }
}

bfs();
console.log(parentNode.slice(2).join('\n'));
