const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift();
const arr = input.map(Number);
let ans = [0];

for (let i = 0; i < arr.length; i++) {
  if (!arr[i]) {
    ans.pop();
  } else {
    ans.push(arr[i]);
  }
}

console.log(ans.reduce((a, b) => a + b));
