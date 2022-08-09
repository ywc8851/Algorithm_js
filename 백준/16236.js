const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
let answer = 0;

let map = new Array(N);
for (let i = 0; i < map.length; i++) {
  map[i] = new Array(N);
}

let shark = {
  x: 0,
  y: 0,
  size: 2,
  eatCnt: 0,
};
let fish = [];

for (let i = 0; i < N; i++) {
  let temp = input
    .shift()
    .trim()
    .split(" ")
    .map((x) => Number(x));
  for (let j = 0; j < N; j++) {
    map[i][j] = temp[j];
    if (map[i][j] === 9) {
      map[i][j] = 0;
      shark.x = j;
      shark.y = i;
    }
  }
}

let dxy = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

BFS(shark.y, shark.x);
function BFS(y, x) {
  let visited = new Array(N);
  for (let i = 0; i < visited.length; i++) {
    visited[i] = new Array(N).fill(false);
  }

  fish = [];

  let Q = [];
  Q.push([y, x, 0]);
  while (Q.length !== 0) {
    let temp = Q.shift();
    let curY = temp[0];
    let curX = temp[1];
    let curD = temp[2];

    for (let next = 0; next < 4; next++) {
      let nextY = curY + dxy[next][0];
      let nextX = curX + dxy[next][1];
      let nextD = curD + 1;

      if (0 <= nextY && nextY < N && 0 <= nextX && nextX < N) {
        if (!visited[nextY][nextX] && map[nextY][nextX] <= shark.size) {
          visited[nextY][nextX] = true;
          Q.push([nextY, nextX, nextD]);
          if (map[nextY][nextX] !== 0 && map[nextY][nextX] < shark.size) {
            fish.push({ x: nextX, y: nextY, distance: nextD });
          }
        }
      }
    }
  }
}

while (fish.length !== 0) {
  if (fish.length >= 2) {
    fish.sort((a, b) => {
      let A = a.distance;
      let B = b.distance;
      if (A < B) return -1;
      else if (A > B) return 1;
      else {
        A = a.y;
        B = b.y;
        if (A < B) return -1;
        else if (A > B) return 1;
        else {
          A = a.x;
          B = b.x;
          if (A < B) return -1;
          else if (A > B) return 1;
          else return 0;
        }
      }
    });
  }
  shark.y = fish[0].y;
  shark.x = fish[0].x;
  map[shark.y][shark.x] = 0;
  shark.eatCnt++;

  if (shark.eatCnt === shark.size) {
    shark.size++;
    shark.eatCnt = 0;
  }

  answer += fish[0].distance;
  fish.shift();
  BFS(shark.y, shark.x);
}

if (fish.length === 0) return console.log(answer);
