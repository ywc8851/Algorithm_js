const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.pop();

const TCs = input.map((TC) => TC.split(' ').map(Number));

function solution(args) {
  const [L, P, V] = args;
  let day = V % P > L ? L : V % P;
  return Math.floor(V / P) * L + day;
}

TCs.forEach((TC, i) => {
  console.log(`Case ${i + 1}: ${solution(TC)}`);
});
