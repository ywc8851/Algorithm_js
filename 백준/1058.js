const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const dist = Array.from({ length: +n + 1 }, () =>
  Array.from({ length: +n + 1 }, () => Infinity)
);

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < n; j++) {
    if (input[i][j] === "Y") {
      dist[i + 1][j + 1] = 1;
      dist[j + 1][i + 1] = 1;
    }
  }
}

for (let k = 1; k < +n + 1; k++) {
  for (let i = 1; i < +n + 1; i++) {
    for (let j = 1; j < +n + 1; j++) {
      if (dist[i][k] + dist[k][j] < dist[i][j] && i !== j) {
        dist[i][j] = dist[i][k] + dist[k][j];
      }
    }
  }
}

let ans = 0;

dist.slice(1).forEach(t => {
  ans = Math.max(ans, t.filter(v => v === 1 || v === 2).length);
});

console.log(ans);
