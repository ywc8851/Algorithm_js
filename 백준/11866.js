let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
let n = Number(input[0]);
let k = Number(input[1]);
let q = [];
let ans = [];
for (let i = 0; i < n; i++) {
  q.push(i + 1);
}
while (q.length > 0) {
  for (let j = 0; j < k - 1; j++) {
    q.push(q.shift());
  }
  ans.push(q.shift());
}
ans = ans.join(", ");
console.log(`<${ans}>`);
