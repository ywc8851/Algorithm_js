const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const carInfo = input.map((i) => i.trim());
const visited = Array.from({ length: N }, () => false);
const map = new Map();

carInfo.slice(0, N).map((car, idx) => {
  map.set(car, idx);
});

let cur = 0;
let cnt = 0;

carInfo.slice(N).map((car) => {
  if (!visited[map.get(car)]) {
    if (map.get(car) > cur) {
      let flag = false;
      for (let i = 0; i < map.get(car); i++) {
        if (!visited[i]) {
          flag = true;
          cnt++;
          break;
        }
      }
      if (!flag) cur = map.get(car) + 1;
    } else {
      cur++;
    }
  }
  visited[map.get(car)] = true;
});

console.log(cnt);
