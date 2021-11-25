const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m, k] = input[0].split(" ").map(Number);
let indegrees = new Array(n + 1).fill(0);
let graph = new Array(n + 1);
for (let i = 0; i < graph.length; i++) {
  graph[i] = [];
}
let building_num = new Array(n + 1).fill(0);
for (let i = 0; i < m; i++) {
  let [from, to] = input[i + 1].split(" ").map(Number);
  graph[from].push(to);
  indegrees[to]++;
}

let flag = true;
for (let i = 0; i < k; i++) {
  let [a, b] = input[i + m + 1].split(" ").map(Number);
  if (a === 1) {
    // 건설
    if (indegrees[b] !== 0) {
      flag = false;
      break;
    } else {
      if (building_num[b] === 0) {
        for (let j = 0; j < graph[b].length; j++) {
          indegrees[graph[b][j]]--;
        }
      }
      building_num[b]++;
    }
  } else {
    // 파괴
    if (building_num[b] === 0) {
      flag = false;
      break;
    }
    if (building_num[b] === 1) {
      for (let j = 0; j < graph[b].length; j++) {
        indegrees[graph[b][j]]++;
      }
    }
    building_num[b]--;
  }
}
if (flag) {
  console.log("King-God-Emperor");
} else {
  console.log("Lier!");
}
