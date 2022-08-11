const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, r] = input.shift().split(" ").map(Number);
const arr = input.map((i) => i.trim().split(" ").map(Number));

const rotate = (rotateNum) => {
  let check = Math.min(n, m) / 2;

  for (let r = 0; r < rotateNum; r++) {
    for (let squareCnt = 0; squareCnt < check; squareCnt++) {
      let newN = n - squareCnt - 1;
      let newM = m - squareCnt - 1;

      let tmp = arr[squareCnt][squareCnt];

      for (let i = squareCnt; i < newM; i++) {
        arr[squareCnt][i] = arr[squareCnt][i + 1];
      }
      for (let i = squareCnt; i < newN; i++) {
        arr[i][newM] = arr[i + 1][newM];
      }
      for (let i = newM; i > squareCnt; i--) {
        arr[newN][i] = arr[newN][i - 1];
      }
      for (let i = newN; i > squareCnt; i--) {
        arr[i][squareCnt] = arr[i - 1][squareCnt];
      }
      arr[squareCnt + 1][squareCnt] = tmp;
    }
  }
};

rotate(r);

for (let i = 0; i < n; i++) {
  console.log(arr[i].join(" "));
}
