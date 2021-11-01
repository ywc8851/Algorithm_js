const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let visited = new Array(100001).fill(0);
let path = new Array(100001).fill(0);
function BFS() {
  let L = 0;
  let queue = [];
  queue.push(n);
  visited[n] = 1;
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let x = queue.shift();
      if (x === k) {
        return L;
      }
      for (let nx of [x + 1, x - 1, x * 2]) {
        if (visited[nx] === 0 && nx >= 0 && nx <= 100000) {
          path[nx] = x;
          visited[nx] = 1;
          queue.push(nx);
        }
      }
    }
    L++;
  }
}
let time = BFS();
let ans = [];
let before = path[k];
ans.push(k);
for (let i = 0; i < time; i++) {
  ans.push(before);
  before = path[before];
}
console.log(`${time}\n${ans.reverse().join(" ")}`);
