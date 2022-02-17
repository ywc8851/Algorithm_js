const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const tc = +input[0];
let index = 1;

for (let i = 0; i < tc; i++) {
  const num = +input[index++];
  const arr = new Array(num);
  for (let j = 0; j < num; j++) {
    arr[j] = input[index++].split(' ').map(Number);
  }
  arr.sort((a, b) => a[0] - b[0]);

  let cnt = 1;
  let cur = arr[0][1];

  for (let k = 1; k < arr.length; k++) {
    if (arr[k][1] < cur) {
      cnt += 1;
      cur = arr[k][1];
    }
  }
  console.log(cnt);
}
