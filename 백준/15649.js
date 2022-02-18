const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
let visited = new Array(N).fill(0);

function backtracking(arr, m) {
  if (m === M) console.log(arr.join(' '));

  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      arr.push(i + 1);
      visited[i] = true;
      backtracking(arr, m + 1);
      arr.pop();
      visited[i] = false;
    }
  }
}
let arr = [];
backtracking(arr, 0);
