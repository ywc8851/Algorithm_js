const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const wheelInfo = input.slice(0, 4).map((info) =>
  info
    .replace(/(\r\n|\n|\r)/gm, '')
    .split('')
    .map(Number)
);

const rotations = [];
input.slice(5, input.length).forEach((rotateInfo) => {
  rotations.push(rotateInfo.split(' ').map(Number));
});

let check = Array.from({ length: 5 }, () => false);

function rotateWheel(wheelNum, direction) {
  if (direction === 1) {
    let tmp = wheelInfo[wheelNum][7];
    wheelInfo[wheelNum].pop();
    wheelInfo[wheelNum] = [tmp, ...wheelInfo[wheelNum]];
  } else {
    let tmp = wheelInfo[wheelNum][0];
    wheelInfo[wheelNum].shift();
    wheelInfo[wheelNum] = [...wheelInfo[wheelNum], tmp];
  }
}

function setRotation(wheelNum, direction) {
  check[wheelNum] = true;
  const [prevWheelNum, nextWheelNum] = [wheelNum - 1, wheelNum + 1];

  if (prevWheelNum >= 0 && !check[prevWheelNum]) {
    if (wheelInfo[prevWheelNum][2] !== wheelInfo[wheelNum][6]) {
      setRotation(prevWheelNum, direction * -1);
    }
  }

  if (nextWheelNum < 4 && !check[nextWheelNum]) {
    if (wheelInfo[nextWheelNum][6] !== wheelInfo[wheelNum][2]) {
      setRotation(nextWheelNum, direction * -1);
    }
  }

  rotateWheel(wheelNum, direction);
}

for (const [wheelNum, dir] of rotations) {
  check.fill(false);

  setRotation(wheelNum - 1, dir);
}

let ans = 0;
let plus = 1;

for (const [wheelFirstInfo] of wheelInfo) {
  if (wheelFirstInfo) ans += plus;

  plus *= 2;
}

console.log(ans);
