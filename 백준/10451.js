const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let tc = Number(input[0]);
let index = 1;
for (let i = 0; i < tc; i++) {
  let n = Number(input[index]);
  let arr = new Array(n);
  let visited = new Array(n + 1).fill(false);

  arr = input[index + 1].split(" ").map(Number);
  let cnt = 0;
  function DFS(node) {
    visited[node] = true;
    if (!visited[arr[node - 1]]) DFS(arr[node - 1]);
  }
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      DFS(i);
      cnt++;
    }
  }
  console.log(cnt);
  index += 2;
}
