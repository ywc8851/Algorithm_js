const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const [startX, startY, endX, endY] = input[1].split(" ").map(Number);
const visited = Array.from({ length: n + 1 }, () =>
  Array.from({ length: n + 1 }, () => false)
);
const dx = [-2, -2, 0, 0, 2, 2];
const dy = [-1, 1, -2, 2, -1, +1];

const bfs = (startX, startY) => {
  const queue = [[startX, startY, 0]];
  visited[startX][startY] = true;

  while (queue.length) {
    const [curX, curY, curTime] = queue.shift();
    if (curX === endX && curY === endY) return curTime;

    for (let i = 0; i < 6; i++) {
      const [nextX, nextY] = [curX + dx[i], curY + dy[i]];

      if (
        nextX < 0 ||
        nextX >= n ||
        nextY < 0 ||
        nextY >= n ||
        visited[nextX][nextY]
      )
        continue;

      visited[nextX][nextY] = true;
      queue.push([nextX, nextY, curTime + 1]);
    }
  }

  return -1;
};

console.log(bfs(startX, startY));
