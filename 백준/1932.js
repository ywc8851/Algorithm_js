const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input.shift();
let arr = Array.from({ length: n }, () => []);
let sum = Array.from({ length: n }, () => []);

input.map((i, index) => {
  arr[index] = i.split(' ').map(Number);
});

sum[0][0] = arr[0][0];

for (let i = 1; i < n; i++) {
  sum[i][0] = sum[i - 1][0] + arr[i][0];
  sum[i][i] = sum[i - 1][i - 1] + arr[i][i];
}

for (let i = 1; i < n; i++) {
  for (let j = 1; j < arr[i].length - 1; j++) {
    sum[i][j] = arr[i][j] + Math.max(sum[i - 1][j - 1], sum[i - 1][j]);
  }
}

console.log(Math.max(...sum[n - 1]));
