const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [start, end] = input.shift().split(' ').map(Number);

const bfs = (x) => {
  let queue = [[x, 1]];

  while (queue.length) {
    let [cur, cnt] = queue.shift();
    if (cur === end) {
      return console.log(cnt);
    } else {
      if (cur * 2 <= end) queue.push([cur * 2, cnt + 1]);

      if (cur * 10 + 1 <= end) queue.push([cur * 10 + 1, cnt + 1]);
    }
  }

  console.log(-1);
};

bfs(start);
