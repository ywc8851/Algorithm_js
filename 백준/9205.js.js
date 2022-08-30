const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const bfs = (n, startX, startY, finalX, finalY, cu) => {
  const visited = Array.from({ length: n }, () => false);

  const q = [[startX, startY]];
  while (q.length) {
    const [x, y] = q.shift();
    if (Math.abs(x - finalX) + Math.abs(y - finalY) <= 1000) {
      console.log("happy");
      return;
    } else {
      for (let i = 0; i < cu.length; i++) {
        if (Math.abs(x - cu[i][0]) + Math.abs(y - cu[i][1]) <= 1000) {
          if (!visited[i]) {
            visited[i] = true;
            q.push([cu[i][0], cu[i][1]]);
          }
        }
      }
    }
  }
  console.log("sad");
};

let tc = +input.shift();
while (tc--) {
  const n = +input.shift();
  const cu = Array.from({ length: n }, () =>
    Array.from({ length: 2 }, () => 0)
  );
  const [startX, startY] = input.shift().split(" ").map(Number);
  for (let i = 0; i < n; i++) {
    [cu[i][0], cu[i][1]] = input.shift().split(" ").map(Number);
  }
  const [finalX, finalY] = input.shift().split(" ").map(Number);
  bfs(n, startX, startY, finalX, finalY, cu);
}
