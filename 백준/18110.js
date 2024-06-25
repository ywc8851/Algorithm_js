const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input.shift();
if (n === 0) {
  console.log(0);
} else {
  const scores = input.map((i) => +i).sort((a, b) => a - b);
  const exceptNum = Math.round(n * 0.15);

  const afterscores = scores.slice(exceptNum, n - exceptNum);
  console.log(
    Math.round(
      afterscores.reduce((a, b) => a + b, 0) / (afterscores.length || 1)
    )
  );
}
