const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const changeToNum = (str) => {
  const charCode = str.charCodeAt(0);

  if ("A".charCodeAt(0) <= charCode && charCode <= "H".charCodeAt(0))
    return charCode - "A".charCodeAt(0);
  return Number(str) - 1;
};

const changeToAlphabet = (num) => {
  return String.fromCharCode(num + "A".charCodeAt(0));
};

const isPossibleRoute = (y, x) => 0 <= y && y < 8 && 0 <= x && x < 8;
const move = (pos, direction) => {
  let [y, x] = pos;

  switch (direction) {
    case "R":
      [y, x] = [y + 1, x];
      break;
    case "L":
      [y, x] = [y - 1, x];
      break;
    case "B":
      [y, x] = [y, x - 1];
      break;
    case "T":
      [y, x] = [y, x + 1];
      break;
    case "RT":
      [y, x] = [y + 1, x + 1];
      break;
    case "LT":
      [y, x] = [y - 1, x + 1];
      break;
    case "RB":
      [y, x] = [y + 1, x - 1];
      break;
    case "LB":
      [y, x] = [y - 1, x - 1];
      break;
  }

  return [y, x];
};

const moveKing = (king, stone, direction) => {
  let [ky, kx] = move(king, direction);
  let [sy, sx] = stone;

  if (!isPossibleRoute(ky, kx)) return;

  if (kx !== sx || ky !== sy) {
    king[0] = ky;
    king[1] = kx;
    return;
  }

  [sy, sx] = move(stone, direction);

  if (!isPossibleRoute(sy, sx)) return;

  king[0] = ky;
  king[1] = kx;
  stone[0] = sy;
  stone[1] = sx;
};

let [king, stone, n] = input[0].split(" ");

king = king.split("").map(changeToNum);
stone = stone.split("").map(changeToNum);

for (let i = 1; i < +n + 1; i++) {
  const direction = input[i];

  moveKing(king, stone, direction);
}

console.log(
  `${changeToAlphabet(king[0]) + (king[1] + 1)}\n${
    changeToAlphabet(stone[0]) + (stone[1] + 1)
  }`
);
