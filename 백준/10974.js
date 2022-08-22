const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const arr = [];
const visited = Array.from({ length: n }, () => false);

const dfs = () => {
  if (arr.length === n) {
    console.log(arr.join(" "));
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      arr.push(i + 1);
      dfs(i + 1);
      visited[i] = false;
      arr.pop();
    }
  }
};

dfs();
