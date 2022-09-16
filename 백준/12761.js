const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [A, B, start, end] = input.shift().split(" ").map(Number);
const visited = Array.from({ length: 100001 }, () => false);
const MAX = 100000 + 1;
const bfs = () => {
  let q = [];
  q.push([start, 0]);
  visited[start] = true;
  while (q.length) {
    const [cur, cnt] = q.shift();
    if (cur === end) return cnt;

    if (cur + 1 < MAX && !visited[cur + 1]) {
      visited[cur + 1] = true;
      q.push([cur + 1, cnt + 1]);
    }

    if (cur - 1 >= 0 && !visited[cur - 1]) {
      visited[cur - 1] = true;
      q.push([cur - 1, cnt + 1]);
    }

    if (cur + A < MAX && !visited[cur + A]) {
      visited[cur + A] = true;
      q.push([cur + A, cnt + 1]);
    }

    if (cur - A >= 0 && !visited[cur - A]) {
      visited[cur - A] = true;
      q.push([cur - A, cnt + 1]);
    }

    if (cur + B < MAX && !visited[cur + B]) {
      visited[cur + B] = true;
      q.push([cur + B, cnt + 1]);
    }

    if (cur - B >= 0 && !visited[cur - B]) {
      visited[cur - B] = true;
      q.push([cur - B, cnt + 1]);
    }

    if (cur * A < MAX && !visited[cur * A]) {
      visited[cur * A] = true;
      q.push([cur * A, cnt + 1]);
    }

    if (cur * B < MAX && !visited[cur * B]) {
      visited[cur * B] = true;
      q.push([cur * B, cnt + 1]);
    }
  }
};

console.log(bfs(start));
