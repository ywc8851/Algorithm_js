const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
const nums = input.map((i) => +i).sort((a, b) => a - b);
const sum = nums.reduce((a, b) => a + b);
let ans = [];

function getMostValue(array) {
  const map = new Map();
  let maxValue = 0;
  let answer = [];

  for (let i = 0; i < n; i++) {
    if (!map.has(array[i])) {
      map.set(array[i], 1);
    } else {
      map.set(array[i], map.get(array[i]) + 1);
    }
  }

  map.forEach((val, key) => {
    if (maxValue < val) {
      maxValue = val;
      answer = [];
      answer.push(key);
    } else if (maxValue === val) {
      answer.push(key);
    }
  });

  return answer.length !== 1 ? answer[1] : answer[0];
}

ans.push(Math.round(sum / n)); // 산술평균
ans.push(nums[n / 2 - 0.5]); // 중앙값
ans.push(getMostValue(nums)); // 최빈값
ans.push(nums[n - 1] - nums[0]); // 범위

console.log(ans.join('\n'));
