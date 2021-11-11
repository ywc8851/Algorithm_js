const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [f, s, g, u, d] = input[0].split(" ").map(Number);

let visited = new Array(2000001).fill(0);
let cnt = 0;
let flag = true;
let queue = [];
queue.push(s);
visited[s] = 1;
while (queue.length) {
  let len = queue.length;
  for (let i = 0; i < len; i++) {
    let x = queue.shift();
    if (x === g) {
      flag = false;
      visited[x] = 1;
      console.log(cnt);
    }
    for (let k of [x + u, x - d]) {
      if (visited[k] === 0 && k >= 1 && k <= f) {
        visited[k] = 1;
        queue.push(k);
      }
    }
  }
  if (flag === false) {
    break;
  }
  cnt++;
}
if (flag) {
  console.log("use the stairs");
}
