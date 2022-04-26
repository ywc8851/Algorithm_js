const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m, str] = input;
const arr = str.split('');
let cnt = (ans = 0);
let index = 1;

while (index < m - 1) {
  if (arr[index - 1] === 'I' && arr[index] === 'O' && arr[index + 1] === 'I') {
    cnt++;
    if (cnt === +n) {
      cnt--;
      ans++;
    }
    index++;
  } else {
    cnt = 0;
  }
  index++;
}

console.log(ans);
