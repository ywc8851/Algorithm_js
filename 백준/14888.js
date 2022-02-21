const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const nums = input[1].split(' ').map(Number);
const operators = input[2].split(' ').map(Number); // + - * /

let maxAns = -Infinity;
let minAns = Infinity;
let opArr = [];

function calculate(opIndex, a, b) {
  if (opIndex === 0) {
    return a + b;
  }
  if (opIndex === 1) {
    return a - b;
  }
  if (opIndex === 2) {
    return a * b;
  }
  if (opIndex === 3) {
    if (a < 0) {
      return -Math.floor(-a / b);
    }
    return Math.floor(a / b);
  }
}

function dfs(L) {
  if (L === N - 1) {
    // 수식완성된 경우
    let cur = nums[0];
    for (let i = 0; i < opArr.length; i++) {
      let num = nums[i + 1];
      let index = opArr[i];

      cur = calculate(index, cur, num);
    }
    if (cur > maxAns) maxAns = cur;
    if (cur < minAns) minAns = cur;
  }

  for (let i = 0; i < 4; i++) {
    if (!operators[i]) continue;

    opArr.push(i);
    operators[i]--;
    dfs(L + 1);
    operators[i]++;
    opArr.pop();
  }
}

dfs(0);

console.log(maxAns === 0 ? 0 : maxAns);
console.log(minAns === 0 ? 0 : minAns);
