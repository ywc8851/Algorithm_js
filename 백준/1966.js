const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const tc = +input.shift();
let index = 0;

for (let i = 0; i < tc; i++) {
  const [n, m] = input[index].split(' ').map(Number);
  const nums = input[index + 1]
    .split(' ')
    .map(Number)
    .map((i, index) => [i, index]);
  const arr = [...nums].sort((a, b) => b[0] - a[0]);
  const cur = nums[m][0];
  const curIndex = nums[m][1];
  let cnt = 0;

  while (1) {
    if (nums[0][0] >= arr[0][0]) {
      cnt++;
      if (nums[0][0] === cur && nums[0][1] === curIndex) {
        console.log(cnt);
        break;
      }
      arr.shift();
      nums.shift();
    } else {
      nums.push(nums.shift());
    }
  }
  index += 2;
}
