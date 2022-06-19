const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [row, col] = input.shift().split(" ").map(Number);
const arr = input.map((i) => i.split(" ").map(Number));
const isOutAir = Array.from({ length: row }, () =>
  Array.from({ length: col }, () => false)
);
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
let cheeseCnt = 0;

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if (arr[i][j] === 1) cheeseCnt++;
  }
}

const checkAir = () => {
  isOutAir.forEach((vRow) => vRow.fill(false));
  const q = [];
  isOutAir[0][0] = true;
  q.push([0, 0]);

  while (q.length) {
    const [x, y] = q.shift();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || nx >= row || ny < 0 || ny >= col) continue;

      if (arr[nx][ny] === 0 && !isOutAir[nx][ny]) {
        q.push([nx, ny]);
        isOutAir[nx][ny] = true;
      }
    }
  }
};

const isMeltCheese = (x, y) => {
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (nx < 0 || nx >= row || ny < 0 || ny >= col) continue;

    if (isOutAir[x + dx[i]][y + dy[i]]) return true;
  }
  return false;
};

let time = 0;
let lastCheeseCnt = 0;
while (1) {
  checkAir();

  let curCheese = cheeseCnt;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (arr[i][j] === 1 && isMeltCheese(i, j)) {
        arr[i][j] = 0;
        cheeseCnt--;
      }
    }
  }

  time++;

  if (cheeseCnt === 0) {
    lastCheeseCnt = curCheese;
    break;
  }
}

console.log(`${time}\n${lastCheeseCnt}`);
