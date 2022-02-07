const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = +input.shift();

let arr = new Array(n);
for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(n);
}

let visit = new Array(n);
for (let i = 0; i < visit.length; i++) {
  visit[i] = new Array(n).fill(0);
}

for (let i = 0; i < n; i++) {
  arr[i] = input[i].split(" ").map(Number);
}

let ans = 0;
let dx = [0, 0, 1, -1];
let dy = [1, -1, 0, 0];

function DFS(x, y, height) {
  visit[x][y] = 1;
  
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (
      nx >= 0 &&
      nx < n &&
      ny >= 0 &&
      ny < n &&
      arr[nx][ny] > height &&
      visit[nx][ny] === 0
    ) {
      DFS(nx, ny, height);
    }
  }
}

for (let i = 0; i < 101; i++) {
  for (let m = 0; m < visit.length; m++) {
    visit[m] = new Array(n).fill(0);
  }
  
  let cnt = 0;
  
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      if (arr[j][k] > i && visit[j][k] === 0) {
        cnt++;
        DFS(j, k, i);
      }
    }
  }
  ans = Math.max(ans, cnt);
}
console.log(ans);
