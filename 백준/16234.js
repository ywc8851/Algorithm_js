const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, l, r] = input.shift().split(' ').map(Number);
const citys = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));

for (let i = 0; i < n; i++) {
  citys[i] = input.shift().split(' ').map(Number);
}

let ans = 0;
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

while (1) {
  let flag = false;
  const visited = Array.from({ length: n }, () => Array.from({ length: n }, () => false));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) {
        let queue = [[i, j]];
        let visitedRecord = [[i, j]];
        let cnt = 1;
        let sumPopulation = citys[i][j];
        visited[i][j] = true;

        while (queue.length) {
          const [x, y] = queue.shift();
          for (let k = 0; k < 4; k++) {
            const [nx, ny] = [x + dx[k], y + dy[k]];

            if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
              const diff = Math.abs(citys[x][y] - citys[nx][ny]);
              if (diff >= l && diff <= r && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
                visitedRecord.push([nx, ny]);
                cnt++;
                sumPopulation += citys[nx][ny];
                flag = true;
              }
            }
          }
        }

        const changePopulation = Math.floor(sumPopulation / cnt);

        for (const [x, y] of visitedRecord) {
          citys[x][y] = changePopulation;
        }
      }
    }
  }

  if (!flag) break;
  ans += 1;
}
console.log(ans);
