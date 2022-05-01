function Queue() {
  this.data = [];
}
Queue.prototype.push = function (v) {
  this.data.push(v);
};
Queue.prototype.shift = function () {
  return this.data.shift() || null;
};
Queue.prototype.size = function () {
  return this.data.length;
};

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [, L] = input.shift().split(' ').map(Number);
const [start, end] = input.pop().split(' ').map(Number);
const subway = input.map((i) => i.split(' ').map(Number).slice(0, -1));

function solution(subway, S, E) {
  if (S === E) return 0;
  const map = {};
  const visited = new Array(subway.length).fill(false);

  const queue = new Queue();
  queue.push(S);
  let L = 0;
  for (let i = 0; i < subway.length; i++) {
    for (const stop of subway[i]) {
      if (map[stop] === undefined) {
        map[stop] = [];
      }
      map[stop].push(i);
    }
  }

  while (queue.size() > 0) {
    let qlen = queue.size();
    for (let i = 0; i < qlen; i++) {
      const curStop = queue.shift();
      for (const bus of map[curStop]) {
        if (visited[bus]) continue;
        visited[bus] = true;
        for (const stop of subway[bus]) {
          if (stop === E) return L;
          queue.push(stop);
        }
      }
    }
    L++;
  }
  return -1;
}

console.log(solution(subway, start, end));
