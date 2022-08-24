const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const arr = input.map((i) => i.split(" ").map(Number));
const visited = Array.from({ length: n }, () => 0);
let ans = Infinity;

const dfs = (start, cur, sum, cnt) => {
  if (cnt === n && start === cur) {
    if (ans > sum) ans = sum;
    return;
  }

  for (let i = 0; i < n; i++) {
    if (arr[cur][i] === 0) continue;

    if (!visited[cur]) {
      visited[cur] = true;
      sum += arr[cur][i];

      if (sum <= ans) dfs(start, i, sum, cnt + 1);

      visited[cur] = false;
      sum -= arr[cur][i];
    }
  }
};

for (let i = 0; i < n; i++) {
  dfs(i, i, 0, 0);
}

console.log(ans);
