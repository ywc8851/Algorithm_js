const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
const buyPrice = input.shift().split(' ').map(Number);

const dcInfo = Array.from({ length: n }, () => []);
const dcCnt = Array.from({ length: n }, () => 0);
const dcSum = Array.from({ length: n }, () => 0);
const isBuy = Array.from({ length: n }, () => false);
let ans = 0;

for (let i = 0; i < n; i++) {
  const infoNum = +input.shift();

  if (infoNum === 0) continue;

  for (let j = 0; j < infoNum; j++) {
    const [portionNum, dcNum] = input.shift().split(' ').map(Number);
    dcInfo[i].push([portionNum, dcNum]);
    if (dcNum < buyPrice[portionNum - 1]) {
      dcCnt[i] += dcNum;
    } else {
      dcCnt[i] += buyPrice[portionNum - 1] - 1;
    }
  }
}


for (let tc = 0; tc < n; tc++) {
  for (let i = 0; i < n; i++) {
    dcSum[i] = dcCnt[i] - buyPrice[i];
  }

  let maxCnt = Math.max(...dcSum);
  let buyNum;
  for (let i = 0; i < n; i++) {
    if (maxCnt === dcSum[i]) {
      buyNum = i;
      break;
    }
  }

  isBuy[buyNum] = true;
  ans += buyPrice[buyNum];
  buyPrice[buyNum] = 0;
  dcCnt[buyNum] = -Infinity;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < dcInfo[i].length; j++) {
      const [a, b] = dcInfo[i][j];
      if (a === buyNum) {
        dcInfo[i][j][1] = 0;
        dcCnt[i] -= b;
      }
    }
  }

  for (let i = 0; i < dcInfo[buyNum].length; i++) {
    const [a, b] = dcInfo[buyNum][i];
    if (buyPrice[a - 1] > b) {
      buyPrice[a - 1] -= b;
    } else {
      buyPrice[a - 1] = 1;
    }
  }
}
console.log(ans);
