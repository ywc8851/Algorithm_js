const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const kit = input[1].split(' ').map(Number);
const visited = new Array(n).fill(false);
let ans = 0;

function dfs(cnt, cur) {
  if (cnt === n) ans++;
  for (let i = 0; i < n; i++) {
    if (!visited[i] && cur + kit[i] - k >= 500) {
      visited[i] = true;
      dfs(cnt + 1, cur + kit[i] - k);
      visited[i] = false;
    }
  }
}

dfs(0, 500);
console.log(ans);
