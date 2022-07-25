const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const arr = input[1].split(" ").map(Number);
const visited = Array(n).fill(0);
const tmp = [];
const permutationArr = [];
let ans = -Infinity;

const dfs = (cnt) => {
  if (cnt === n) {
    permutationArr.push([...tmp]);
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    visited[i] = 1;
    tmp.push(arr[i]);
    dfs(cnt + 1);
    tmp.pop();
    visited[i] = 0;
  }
};

dfs(0);

for (let i = 0; i < permutationArr.length; i++) {
  let sum = 0;

  for (let j = 1; j < n; j++) {
    sum += Math.abs(permutationArr[i][j] - permutationArr[i][j - 1]);
  }

  ans = Math.max(ans, sum);
}
console.log(ans);
