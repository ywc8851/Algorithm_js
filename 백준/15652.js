const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const visited = Array.from({ length: N }, () => false);
const arr = [];

const backtracking = (idx, start) => {
  if (idx === M) {
    console.log(arr.join(" "));
    return;
  }

  for (let i = start; i <= N; i++) {
    visited[i] = true;
    arr.push(i);
    backtracking(idx + 1, i);
    arr.pop();
    visited[i] = false;
  }
};

backtracking(0, 1);
