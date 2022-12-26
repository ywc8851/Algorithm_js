const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const tc = +input.shift();
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

for (let i = 0; i < tc; i++) {
  const order = input.shift();
  let minX = 0;
  let minY = 0;
  let maxX = 0;
  let maxY = 0;
  let nx = (ny = 0);
  let direction = 0;

  for (let j = 0; j < order.length; j++) {
    const oper = order[j];
    if (oper === "L") direction = (direction + 3) % 4;
    else if (oper === "R") direction = (direction + 1) % 4;
    else {
      if (oper === "F") {
        nx += dx[direction];
        ny += dy[direction];
      } else {
        nx -= dx[direction];
        ny -= dy[direction];
      }
      maxX = Math.max(nx, maxX);
      maxY = Math.max(ny, maxY);
      minX = Math.min(nx, minX);
      minY = Math.min(ny, minY);
    }
  }
  console.log((maxX - minX) * (maxY - minY));
}
