const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let inputArr = [];
for (let i = 1; i < input.length; i++) {
  inputArr.push(input[i].split(" "));
}

function soultion(inputArr) {
  let answer = [];
  inputArr.map((el) => {
    const n = +el[0];
    const m = +el[1];
    const dp = Array.from(Array(30), () => Array(30).fill(0));

    for (let i = 1; i <= n; i++) {
      for (let j = i; j <= m; j++) {
        if (j === i) {
          dp[i][j] = 1;
        } else if (i === 1) {
          dp[i][j] = j;
        } else {
          let temp = 0;
          for (let k = 1; k < j; k++) {
            temp += dp[i - 1][k];
          }
          dp[i][j] = temp;
        }
      }
    }
    answer.push(dp[n][m]);
  });
  console.log(answer.join("\n"));
}

soultion(inputArr);
