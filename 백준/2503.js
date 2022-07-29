const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const ra = new Array(1000).fill(0);
let res = 0;
for (let tc = 1; tc <= N; ++tc) {
  const spl = input[tc].split(" ").map(Number);
  const num = spl[0];
  const strike = spl[1];
  const ball = spl[2];
  const na = num.toString().split("").map(Number);

  if (strike === 3) {
    res = 1;
    break;
  }

  for (let i = 123; i <= 987; ++i) {
    const ii = i.toString().split("").map(Number);
    if (i.toString().includes("0")) continue;
    if (ii[0] === ii[1] || ii[1] === ii[2] || ii[2] === ii[0]) continue;

    let cs = 0;
    let cb = 0;
    if (ii[0] === na[0]) ++cs;
    if (ii[1] === na[1]) ++cs;
    if (ii[2] === na[2]) ++cs;
    if (ii[0] === na[1] || ii[0] === na[2]) ++cb;
    if (ii[1] === na[0] || ii[1] === na[2]) ++cb;
    if (ii[2] === na[0] || ii[2] === na[1]) ++cb;

    if (strike === cs && ball === cb) ++ra[i];
  }
}

if (res === 1) console.log(1);
else {
  let cnt = 0;
  for (let i = 111; i <= 999; ++i) {
    if (ra[i] > cnt) {
      cnt = ra[i];
      res = 1;
    } else if (ra[i] === cnt) ++res;
  }
  console.log(res);
}
