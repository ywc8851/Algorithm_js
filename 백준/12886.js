const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let nums = input[0].split(" ").map(Number);
let ans = 0;
let flag = true;
let [a, b, c] = nums.sort((a, b) => a - b);
if ((a + b + c) % 3 !== 0) {
  // 불가능한 경우
  flag = false;
}
if (flag) {
  // 가능한 경우
  let visited = new Set([]);
  visited.add(nums.join(""));
  let queue = [nums];
  while (queue.length) {
    // BFS 탐색
    const [x, y, z] = queue.shift();
    // 3개의 수가 같을 때
    if (x === y && y === z) {
      ans = 1;
      break;
    }
    // 모든 경우의 수 queue에 삽입
    if (x < y) {
      const next = [x + x, y - x, z].sort((a, b) => a - b);
      const nextStr = next.join("");
      if (!visited.has(nextStr)) {
        visited.add(nextStr);
        queue.push(next);
      }
    }

    if (y < z) {
      const next = [x, y + y, z - y].sort((a, b) => a - b);
      const nextStr = next.join("");
      if (!visited.has(nextStr)) {
        visited.add(nextStr);
        queue.push(next);
      }
    }

    if (x < z) {
      const next = [x + x, y, z - x].sort((a, b) => a - b);
      const nextStr = next.join("");
      if (!visited.has(nextStr)) {
        visited.add(nextStr);
        queue.push(next);
      }
    }
  }
}
console.log(ans);
