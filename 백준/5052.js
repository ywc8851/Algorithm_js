const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let tc = +input[0];
let index = 1;

while (tc--) {
  let num = +input[index++];
  let arr = [...Array(num)].map(() => input[index++].trim()).sort();
  let len = 0;
  let result = "YES";

  for (let i = 0; i < num; i++) {
    if (arr[i].slice(0, len) === arr[i - 1]) {
      result = "NO";
      break;
    }
    len = arr[i].length;
  }
  console.log(result);
}
