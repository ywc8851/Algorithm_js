const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const regExp = /(<.+?>|\s)/g;
const words = input[0].split(regExp);
let result = [];
words.map((x) => {
  if (regExp.test(x)) {
    result += x;
  } else {
    let a = x.split('').reverse().join('');
    result += a; //
  }
});
console.log(result);
