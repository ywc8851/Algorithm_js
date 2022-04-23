const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function isPelindrom(word, left, right) {
  while (left < right) {
    if (word[left] === word[right]) {
      left += 1;
      right -= 1;
    } else {
      return false;
    }
  }
  return true;
}

function checkPelindrom(word) {
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] === word[right]) {
      left += 1;
      right -= 1;
    } else {
      if (isPelindrom(word, left + 1, right) || isPelindrom(word, left, right - 1)) {
        return 1;
      }
      return 2;
    }
  }
  return 0;
}
input.slice(1).map((str) => console.log(checkPelindrom(str.trim())));
