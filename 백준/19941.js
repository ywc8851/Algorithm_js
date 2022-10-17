const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split("");
const visited = new Array(arr.length).fill(false);
let cnt = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "P") {
    for (let j = i - k; j <= i + k; j++) {
      if (0 <= j && j < n && arr[j] == "H" && !visited[j]) {
        visited[j] = true;
        cnt++;
        break;
      }
    }
  }
}

console.log(cnt);
