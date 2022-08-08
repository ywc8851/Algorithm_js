const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const arr = input.shift().split(" ").map(Number);
const visited = new Array(n).fill(Infinity);

const bfs = () => {
  const q = [];
  q.push(0);
  visited[0] = 0;

  while (q.length) {
    const cur = q.shift();

    for (let i = 1; i <= arr[cur]; i++) {
      if (cur + i >= n) break;

      if (visited[cur + i] > visited[cur] + 1) {
        visited[cur + i] = visited[cur] + 1;
        q.push(cur + i);
      }
    }
  }
};

bfs();
visited[n - 1] === Infinity ? console.log(-1) : console.log(visited[n - 1]);
