const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();

let cur = 1;
let sum = cur;
while (sum <= n) {
  cur++;
  sum += cur;
}
console.log(cur - 1);
