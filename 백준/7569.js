const fs = require('fs');
const { exit } = require('process');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }

  shift() {
    if (!this.first) return null;
    let node = this.first;
    if (this.first == this.last) this.last = null;
    this.first = this.first.next;
    this.size--;
    return node.value;
  }

  length() {
    return this.size;
  }
}

let [M, N, H] = input.shift().split(' ').map(Number);

let farm = Array.from({ length: H }, () =>
  Array.from({ length: N }, () => Array.from({ length: M }, () => 0))
);
let visited = Array.from({ length: H }, () =>
  Array.from({ length: N }, () => Array.from({ length: M }, () => 0))
);
let day = Array.from({ length: H }, () =>
  Array.from({ length: N }, () => Array.from({ length: M }, () => 0))
);

for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    farm[i][j] = input.shift().split(' ').map(Number);
  }
}

const direction = [
  [0, 0, 1],
  [0, 0, -1],
  [0, 1, 0],
  [0, -1, 0],
  [1, 0, 0],
  [-1, 0, 0],
];
let queue = new Queue();
let leftTomato = 0;

for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (farm[i][j][k] === 1) {
        visited[i][j][k] = 1;
        queue.push([i, j, k]);
      }
      if (farm[i][j][k] === 0) leftTomato++;
    }
  }
}

if (!leftTomato) console.log(0);
else {
  while (queue.length() > 0) {
    let [height, row, col] = queue.shift();

    for (let i = 0; i < direction.length; i++) {
      const [nheight, nrow, ncol] = [
        height + direction[i][0],
        row + direction[i][1],
        col + direction[i][2],
      ];

      if (
        nrow < 0 ||
        ncol < 0 ||
        nheight < 0 ||
        nrow >= N ||
        ncol >= M ||
        nheight >= H ||
        visited[nheight][nrow][ncol] ||
        farm[nheight][nrow][ncol] !== 0
      )
        continue;

      day[nheight][nrow][ncol] = day[height][row][col] + 1;
      leftTomato--;

      if (leftTomato == 0) {
        console.log(day[height][row][col] + 1);
        exit();
      }

      queue.push([nheight, nrow, ncol]);
      visited[nheight][nrow][ncol] = 1;
    }
  }
  console.log(-1);
}
