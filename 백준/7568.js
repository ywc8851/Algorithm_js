const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
let arr = input.map((i, index) => [...i.split(' ').map(Number), index]);
let ans = Array.from({ length: n }, () => 0);

arr.sort((a, b) => (a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : a[1] > b[1] ? 1 : -1));

for (let i = 0; i < n; i++) {
  let cnt = 0;
  for (let j = i + 1; j < n; j++) {
    if (arr[i][0] !== arr[j][0] && arr[i][1] < arr[j][1]) cnt++;
  }
  ans[arr[i][2]] = cnt + 1;
}

console.log(ans.join(' '));
