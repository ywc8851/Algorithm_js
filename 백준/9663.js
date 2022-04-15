const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const visited = Array.from({ length: N }, () => 0);
let ans = 0;

const dfs = (level) => {
  if (level === N) ans += 1;
  else {
    for (let i = 0; i < N; i++) {
      if (visited[level]) continue;

      visited[level] = i;
      if (isPossible(level)) dfs(level + 1);
      visited[level] = 0;
    }
  }
};

const isPossible = (x) => {
  for (let i = 0; i < x; i++) {
    if (
      visited[x] === visited[i] ||
      Math.abs(visited[x] - visited[i]) === x - i
    )
      return false;
  }
  return true;
};

dfs(0);
console.log(ans);
