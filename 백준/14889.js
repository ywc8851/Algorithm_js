const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const half = N / 2;
const stats = input.slice(1).map((str) => str.split(" ").map(Number));
const check = new Array(N).fill(0);
let min = Infinity;

function dfs(L, K) {
  if (L === half) {
    const startTeam = [];
    const linkTeam = [];
    let startSum = (linkSum = 0);

    for (let i = 0; i < N; i++) {
      if (check[i]) startTeam.push(i);
      else linkTeam.push(i);
    }
    for (let i = 0; i < half; i++) {
      for (let j = i + 1; j < half; j++) {
        startSum =
          startSum +
          stats[startTeam[i]][startTeam[j]] +
          stats[startTeam[j]][startTeam[i]];
        linkSum =
          linkSum +
          stats[linkTeam[i]][linkTeam[j]] +
          stats[linkTeam[j]][linkTeam[i]];
      }
    }
    
    min = Math.min(min, Math.abs(startSum - linkSum));
    return;
  }

  for (let i = K; i < N; i++) {
    check[i] = 1;
    dfs(L + 1, i + 1);
    check[i] = 0;
  }
}
dfs(0, 0);

console.log(min);
