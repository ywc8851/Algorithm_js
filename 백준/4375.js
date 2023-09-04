const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input.map((i) => +i);

for (let i = 0; i < arr.length; i++) {
  const cur = arr[i];
  let k = 1;
  let ans = 1;

  while (1) {
    if (ans % cur === 0) break;
    else {
      k++;
      ans = ans * 10 + 1;
      ans %= cur;
    }
  }
  console.log(k);
}
