const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, S] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let cnt = 0;

const pick = [];
function dfs(L) {
  if (L === N) {
    const sum = pick.reduce((sum, val) => sum + val, 0);
    if (sum === S) cnt++;
    return;
  }
  pick.push(arr[L]);
  dfs(L + 1);
  pick.pop();
  dfs(L + 1);
}
dfs(0);

if (S === 0) cnt--;
console.log(cnt);
