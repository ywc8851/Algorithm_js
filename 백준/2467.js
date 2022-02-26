const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const arr = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let ans = [];
let cur = Infinity;
let left = 0;
let right = N - 1;

while (left < right) {
  const sum = arr[left] + arr[right];

  if (cur > Math.abs(sum)) {
    ans[0] = arr[left];
    ans[1] = arr[right];
    cur = Math.abs(sum);
  }

  sum > 0 ? right-- : left++;
}

console.log(ans.join(' '));
