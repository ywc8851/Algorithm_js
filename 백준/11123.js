const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let tc = +input.shift();
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

while (tc--) {
  const [row, col] = input.shift().split(" ").map(Number);
  const arr = input.splice(0, row).map((i) => i.trim().split(""));
  const visited = Array.from({ length: row }, () =>
    Array.from({ length: col }, () => false)
  );
  let cnt = 0;

  const bfs = (x, y) => {
    visited[x][y] = true;
    let q = [[x, y]];
    while (q.length) {
      const [x, y] = q.shift();
      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (
          nx < 0 ||
          nx >= row ||
          ny < 0 ||
          ny >= col ||
          visited[nx][ny] ||
          arr[nx][ny] !== "#"
        )
          continue;
        visited[nx][ny] = true;
        q.push([nx, ny]);
      }
    }
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (arr[i][j] === "#" && !visited[i][j]) {
        bfs(i, j, visited);
        cnt++;
      }
    }
  }
  console.log(cnt);
}
