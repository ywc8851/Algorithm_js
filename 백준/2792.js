const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);

let arr = input.map((i) => +i);
let left = 0;
let right = Math.max(...arr);
let ans = Infinity;

while (left <= right) {
  let mid = parseInt((left + right) / 2);
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    cnt += Math.ceil(arr[i] / mid);
  }
  if (cnt <= N) {
    ans = Math.min(ans, mid);
    right = mid - 1;
  } else left = mid + 1;
}

console.log(ans);
