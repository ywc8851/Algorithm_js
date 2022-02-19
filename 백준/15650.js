const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const visited = new Array(N).fill(false);

function backtracking(arr, cnt, prev) {
  if (cnt === M) return console.log(arr.join(' '));

  for (let i = prev; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      arr.push(i + 1);
      backtracking(arr, cnt + 1, i);
      arr.pop();
      visited[i] = false;
    }
  }
}

let arr = [];
backtracking(arr, 0, 0);
