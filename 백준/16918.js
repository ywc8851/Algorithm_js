const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [R, C, targetTime] = input.shift().split(" ").map(Number);
const currentArr = Array.from({ length: R }, () => Array(C).fill(null));
const bombtime = Array.from({ length: R }, () => Array(C).fill(0));
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
let time = 1;

for (let i = 0; i < R; i++) {
  const temp = input[i].split("");
  for (let j = 0; j < C; j++) {
    currentArr[i][j] = temp[j];
    if (temp[j] === "O") bombtime[i][j] = 3;
  }
}

while (time <= targetTime) {
  if (time % 2 === 0) {
    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        if (currentArr[i][j] === ".") {
          currentArr[i][j] = "O";
          bombtime[i][j] = time + 3;
        }
      }
    }
  } else {
    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        if (bombtime[i][j] === time) {
          currentArr[i][j] = ".";

          for (let k = 0; k < 4; k++) {
            const [nx, ny] = [i + dx[k], j + dy[k]];

            if (nx < 0 || ny < 0 || nx >= R || ny >= C) continue;

            if (currentArr[nx][ny] === "O" && bombtime[nx][ny] !== time) {
              currentArr[nx][ny] = ".";
              bombtime[nx][ny] = 0;
            }
          }
        }
      }
    }
  }

  time += 1;
}

console.log(currentArr.map((row) => row.join("")).join("\n"));
