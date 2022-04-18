const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [L, C] = input.shift().split(' ').map(Number);
const alphabet = input.shift().split(' ').sort();
const vowel = ['a', 'e', 'i', 'o', 'u'];
const answer = [];

function backtracking(str, startIndex) {
  if (str.length === L) {
    let cnt = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowel.includes(str[i])) cnt++;
    }
    if (cnt > 0 && L - cnt > 1) {
      answer.push(str);
    }
    return;
  } else {
    for (let i = startIndex; i < C; i++) {
      backtracking(str + alphabet[i], i + 1);
    }
  }
}

backtracking('', 0);

console.log(answer.join('\n'));
