const { BADFLAGS } = require("dns");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let index = 0;
while (1) {
  let [w, h] = input[index].split(" ").map(Number);
  if (w === 0 && h === 0) break;
  // 배열 선언하고 0,1 입력받기
  let arr = new Array(h);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(w).fill(0);
  }
  for (let i = 0; i < h; i++) {
    arr[i] = input[index + 1 + i].split(" ").map(Number);
  }
  function DFS(x, y) {
    arr[x][y] = 0;
    let dx = [0, 0, 1, -1, 1, 1, -1, -1];
    let dy = [1, -1, 0, 0, -1, 1, 1, -1];
    for (let i = 0; i < 8; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && nx < h && ny >= 0 && ny < w && arr[nx][ny] === 1) {
        DFS(nx, ny);
      }
    }
  }
  let cnt = 0;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (arr[i][j] === 1) {
        DFS(i, j);
        cnt++;
      }
    }
  }
  console.log(cnt);
  index += h + 1;
}
