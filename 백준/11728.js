let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [a, b, c] = input;
const [N, M] = a.split(" ").map((n) => Number(n));
const A = b.split(" ").map((n) => Number(n));
const B = c.split(" ").map((n) => Number(n));

function solution() {
  let ans = [];
  let i = 0;
  let j = 0;
  while (i < A.length && j < B.length) {
    if (A[i] < B[j]) {
      ans.push(A[i++]);
    } else {
      ans.push(B[j++]);
    }
  }
  while (i < A.length) {
    ans.push(A[i++]);
  }
  while (j < B.length) {
    ans.push(B[j++]);
  }
  console.log(ans.join(" "));
}

solution();
