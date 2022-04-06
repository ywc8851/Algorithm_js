const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

[n, ...arr] = input;
arr = arr.map(Number).sort((a, b) => b - a);

let ans = 0;
arr.forEach((num, index) => {
  ans = Math.max(ans, num * (index + 1));
});

console.log(ans);
