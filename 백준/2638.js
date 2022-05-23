const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const arr = input.map(i => i.split(" ").map(Number));
const visit = Array.from({ length: n + 1 }, () =>
  Array.from({ length: m + 1 }, () => 1)
);
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
let ans = 0;

const checkInOut = () => {
  const q = [];
  q.push([0, 0]);
  visit.map(v => v.fill(0));

  while (q.length) {
    const [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m &&
        !visit[nx][ny] &&
        arr[nx][ny] !== 1
      ) {
        visit[nx][ny] = 1;
        arr[nx][ny] = 2;
        q.push([nx, ny]);
      }
    }
  }
};

while (1) {
  let isMelt = false;
  checkInOut();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 1) {
        let cnt = 0;
        for (let k = 0; k < 4; k++) {
          const nx = i + dx[k];
          const ny = j + dy[k];
          if (nx >= 0 && nx < n && ny >= 0 && ny < m && arr[nx][ny] === 2)
            cnt++;
        }
        if (cnt >= 2) {
          arr[i][j] = 3;
          isMelt = true;
        }
      }
    }
  }
  if (isMelt) {
    arr.forEach(row =>
      row.forEach(element => {
        if (element === 3) element = 2;
      })
    );
  }
  ans++;

  let arrHasCheese = false;

  arr.forEach(row =>
    row.forEach(element => {
      if (element === 1) arrHasCheese = true;
    })
  );

  if (!arrHasCheese) break;
}
console.log(ans);
