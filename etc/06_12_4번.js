function solution(grid, k) {
  let ans = Infinity;
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const board = grid.map((i) => i.split(""));
  const n = grid.length;
  const m = grid[0].length;
  const visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => false)
  );

  function DFS(x, y, path) {
    if (x === n - 1 && y === m - 1) {
      let pathArr = [];
      let cnt = 0;
      while (path.length !== 1) {
        let cur = path.shift();
        if (cur === ".") {
          cnt = 1;
          while (1) {
            if (path[0] === "F") {
              path.shift();
              cnt++;
            } else {
              break;
            }
          }
          pathArr.push(cnt);
        }
      }
      let ansCnt = 0;
      let sum = pathArr[0];
      for (let i = 1; i < pathArr.length; i++) {
        if (pathArr[i] > k || pathArr[0] > k) {
          ansCnt = 0;
          break;
        }
        if (sum + pathArr[i] > k) {
          ansCnt++;
          sum = pathArr[i];
        } else {
          sum += pathArr[i];
        }
      }
      ans = Math.min(ans, ansCnt);
    } else {
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < m &&
          board[nx][ny] !== "#" &&
          !visited[nx][ny]
        ) {
          visited[nx][ny] = true;
          DFS(nx, ny, [...path, board[nx][ny]]);
          visited[nx][ny] = false;
        }
      }
    }
  }
  visited[0][0] = 1;
  DFS(0, 0, [board[0][0]]);
  return ans;
}

console.log(solution(["..FF", "###F", "###."], 4)); // 1
console.log(solution(["..FF", "###F", "###."], 5)); // 0
console.log(
  solution(
    [
      ".F.FFFFF.F",
      ".########.",
      ".########F",
      "...######F",
      "##.######F",
      "...######F",
      ".########F",
      ".########.",
      ".#...####F",
      "...#......",
    ],
    6
  )
);
// 3
