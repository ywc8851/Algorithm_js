const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const board = input.slice(0, 5).map((i) => i.split(" ").map(Number));
const call = input.slice(5).map((i) => i.split(" ").map(Number));

const deleteBingoNumber = (num) => {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++)
      if (num === board[i][j]) {
        board[i][j] = 0;
        break;
      }
  }
};

const checkBingo = () => {
  let bingoCount = 0;
  for (let i = 0; i < 5; i++) {
    let isBingo = true;

    for (let j = 0; j < 5; j++) {
      if (board[i][j] !== 0) {
        isBingo = false;
        break;
      }
    }

    if (isBingo) bingoCount++;
  }

  for (let i = 0; i < 5; i++) {
    let isBingo = true;

    for (let j = 0; j < 5; j++) {
      if (board[j][i] !== 0) {
        isBingo = false;
        break;
      }
    }

    if (isBingo) bingoCount++;
  }

  // 오른쪽아래 대각선 방향
  let isRightDownBingo = true;

  for (let i = 0; i < 5; i++) {
    if (board[i][i] !== 0) {
      isRightDownBingo = false;
      break;
    }
  }

  if (isRightDownBingo) bingoCount++;

  // 왼쪽아래 대각선 방향
  let isLeftTopBingo = true;

  for (let i = 0; i < 5; i++) {
    if (board[i][4 - i] !== 0) {
      isLeftTopBingo = false;
      break;
    }
  }

  if (isLeftTopBingo) bingoCount++;

  if (bingoCount >= 3) return true;

  return false;
};

let cnt = 1;

for (let i = 0; i < call.length; i++) {
  for (let j = 0; j < call[0].length; j++) {
    deleteBingoNumber(call[i][j]);
    if (checkBingo()) {
      console.log(cnt);
      return;
    }
    cnt++;
  }
}
