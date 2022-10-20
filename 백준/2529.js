const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const k = +input[0];
const arr = input[1].split(" ");
const visited = new Array(10).fill(false);
let min = "9999999999";
let max = "0000000000";

const dfs = (cnt, curNum, result) => {
  if (cnt === k) {
    max = result > max ? result : max;
    min = result < min ? result : min;
    return;
  }

  if (arr[cnt] === "<") {
    for (let i = curNum + 1; i < 10; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      dfs(cnt + 1, i, result + i);
      visited[i] = false;
    }
  } else {
    for (let i = curNum - 1; i > -1; i--) {
      if (visited[i]) continue;
      visited[i] = 1;
      dfs(cnt + 1, i, result + i);
      visited[i] = 0;
    }
  }
  return;
};

for (let i = 0; i < 10; i++) {
  visited[i] = true;
  dfs(0, i, `${i}`);
  visited[i] = false;
}

console.log(`${max}\n${min}`);
