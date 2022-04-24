const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const strs = input.slice(1).map((str) => str.trim());
strs.map((str) => {
  if (/^(100+1+|01)+$/.test(str)) console.log('YES');
  else console.log('NO');
});
