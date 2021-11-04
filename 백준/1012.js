const { BADFLAGS } = require("dns");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let tc = Number(input[0]);
let index = 1;

for (let i = 0; i < tc; i++) {
  function BFS(x, y) {
    let queue = [];
    let dx = [0, 0, 1, -1];
    let dy = [1, -1, 0, 0];
    queue.push([x, y]);
    arr[x][y] = 0;
    while (queue.length) {
      let len = queue.length;
      for (let i = 0; i < len; i++) {
        let x = queue.shift();
        for (let j = 0; j < 4; j++) {
          let nx = x[0] + dx[j];
          let ny = x[1] + dy[j];
          if (nx >= 0 && nx < n && ny >= 0 && ny < m && arr[nx][ny] === 1) {
            queue.push([nx, ny]);
            arr[nx][ny] = 0;
          }
        }
      }
    }
  }
  let ans = 0;
  let [m, n, k] = input[index].split(" ").map(Number);
  let arr = new Array(n);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(m).fill(0);
  }
  for (let j = 0; j < k; j++) {
    let [a, b] = input[index + j + 1].split(" ").map(Number);
    arr[b][a] = 1;
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 1) {
        BFS(i, j);
        ans++;
      }
    }
  }
  console.log(ans);
  index += k + 1;
}
