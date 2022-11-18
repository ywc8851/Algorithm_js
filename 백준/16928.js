const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
let boardInfo = new Array(101).fill(null).map((_, idx) => idx);
for (let i = 0; i < N + M; i++) {
  const [from, to] = input[i].split(" ").map(Number);
  boardInfo[from] = to;
}

const solution = (borad) => {
  let visited = new Array(101).fill(-1);
  let q = [];

  q.push(1);
  visited[1] = 0;

  while (q.length) {
    let cur = q.shift();
    for (let dice = 1; dice <= 6; dice++) {
      let next = cur + dice;
      if (next > 100) continue;

      next = borad[next];
      if (visited[next] === -1) {
        visited[next] = visited[cur] + 1;
        q.push(next);
      }
    }
  }
  console.log(visited[100]);
};
solution(boardInfo);
