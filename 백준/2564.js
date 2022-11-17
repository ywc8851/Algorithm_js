const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [r, c] = input.shift().split(" ").map(Number);
const shopNum = +input.shift();
const distance = new Array(shopNum);

for (let i = 0; i < shopNum; i++) {
  const [x, y] = input.shift().split(" ").map(Number);
  switch (x) {
    case 1:
      distance[i] = y;
      break;
    case 2:
      distance[i] = 2 * r + c - y;
      break;
    case 3:
      distance[i] = 2 * (r + c) - y;
      break;
    case 4:
      distance[i] = r + y;
      break;
  }
}

const [personX, personY] = input.shift().split(" ").map(Number);
let personDistance = 0;
switch (personX) {
  case 1:
    personDistance = personY;
    break;
  case 2:
    personDistance = 2 * r + c - personY;
    break;
  case 3:
    personDistance = 2 * (r + c) - personY;
    break;
  case 4:
    personDistance = r + personY;
    break;
}

let ans = 0;
for (let i = 0; i < shopNum; i++) {
  let tmpDist = Math.abs(personDistance - distance[i]);
  ans += tmpDist < r + c ? tmpDist : 2 * (r + c) - tmpDist;
}
console.log(ans);
