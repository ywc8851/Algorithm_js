const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const str = input[0];
let cur = str[0];
let cnt = [0, 0];

cnt[+cur] = 1;

for (let i = 1; i < str.length; i++) {
  if (str[i] === cur) {
    continue;
  } else {
    cur = str[i];
    cnt[+cur] += 1;
  }
}

console.log(Math.min(...cnt));
