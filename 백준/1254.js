const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let str = input[0];
let cnt = str.length;

const isPalindrom = (str) => {
  let len = str.length;
  for (let i = 0; i < len; i++) {
    if (str[i] !== str[len - i - 1]) return false;
  }
  return true;
};

while (!isPalindrom(str)) {
  str = str.slice(1);
  cnt++;
}

console.log(cnt);
