let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0].split(" ")[0]);
let m = Number(input[0].split(" ")[1]);
let arr = [];
let result = "";
function dfs(cnt) {
  if (cnt === m) {
    result += `${arr.slice().join(" ")}\n`;
    return;
  } else {
    for (let i = 1; i <= n; i++) {
      arr.push(i);
      dfs(cnt + 1);
      arr.pop();
    }
  }
}
dfs(0);
console.log(result.trim());
