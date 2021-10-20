let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0].split(" ")[0]);
let m = Number(input[0].split(" ")[1]);
let hash_map = new Set();

for (let i = 0; i < n; i++) {
  let str = input[i + 1];
  hash_map.add(str);
}

let cnt = 0;
let answer = [];
for (let i = 0; i < m; i++) {
  let str = input[n + i + 1];
  if (hash_map.has(str)) {
    cnt++;
    answer.push(str);
  }
}
answer.sort();
console.log(cnt);
for (let i = 0; i < answer.length; i++) {
  console.log(answer[i]);
}
