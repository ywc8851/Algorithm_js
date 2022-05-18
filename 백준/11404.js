const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, ...arr] = input;
const busInfo = arr.map(a => a.split(" ").map(Number));
const dist = Array.from({ length: +n + 1 }, () =>
  Array.from({ length: +n + 1 }, () => Infinity)
);

busInfo.forEach(
  bus => (dist[bus[0]][bus[1]] = Math.min(bus[2], dist[bus[0]][bus[1]]))
);
const tmp = dist.map(v => [...v]);

// k = 경유지 , i = 출발 , j = 도착
for (let k = 1; k < +n + 1; k++) {
  for (let i = 1; i < +n + 1; i++) {
    for (let j = 1; j < +n + 1; j++) {
      if (tmp[i][k] + tmp[k][j] < tmp[i][j] && i !== j) {
        tmp[i][j] = tmp[i][k] + tmp[k][j];
      }
    }
  }
}
for (let i = 1; i < +n + 1; i++) {
  for (let j = 1; j < +n + 1; j++) {
    if (tmp[i][j] === Infinity) tmp[i][j] = 0;
  }
}

tmp.slice(1).map(t => {
  console.log(t.slice(1).join(" "));
});
