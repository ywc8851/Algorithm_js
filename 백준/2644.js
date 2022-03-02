const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input[0];
let [a, b] = input[1].split(' ').map(Number);
let m = +input[2];
let graph = Array.from(Array(n + 1), () => []);
let visited = Array.from(Array(n + 1).fill(false));

for (let i = 0; i < m; i++) {
  let [x, y] = input[i + 3].split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

const bfs = (a, b) => {
  let queue = [a];
  let cnt = 0;
  while (queue.length) {
    cnt += 1;
    let qlen = queue.length;

    for (let i = 0; i < qlen; i++) {
      let tmp = queue.shift();
      visited[tmp] = true;

      for (let j of graph[tmp]) {
        if (visited[j] === false) {
          if (j === b) return cnt;
          queue.push(j);
        }
      }
    }
  }
  return -1;
};

console.log(bfs(a, b));
