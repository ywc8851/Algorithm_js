function solution(n, clockwise) {
  var ans = [[]];
  let dx, dy;
  let startX, startY;
  let board = Array.from({ length: n }, () => Array(n).fill(0));
  if (clockwise) {
    // 시계
    dx = [0, 1, 0, -1];
    dy = [1, 0, -1, 0];
    startX = [0, 0, n - 1, n - 1];
    startY = [0, n - 1, n - 1, 0];
  } else {
    // 반시계
    dx = [1, 0, -1, 0];
    dy = [0, 1, 0, -1];
    startX = [0, n - 1, n - 1, 0];
    startY = [0, 0, n - 1, n - 1];
  }

  let start = n - 2;
  let arr = [];
  arr.push(start);
  start -= 1;
  while (start !== 1) {
    arr.push(start);
    if (start === 2 || start === 3) {
      arr.push(1);
      break;
    }
    start -= 2;
  }

  for (let i = 0; i < 4; i++) {
    let curVal = 1;
    let [curX, curY] = [startX[i], startY[i]];
    board[curX][curY] = 1;
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr[j]; k++) {
        curX += dx[(i + j) % 4];
        curY += dy[(i + j) % 4];
        curVal++;
        board[curX][curY] = curVal;
      }
    }
  }
  board.forEach((item) => ans.push(item));
  ans.shift();
  return ans;
}

console.log(solution(5, true)); // [[1,2,3,4,1],[4,5,6,5,2],[3,6,7,6,3],[2,5,6,5,4],[1,4,3,2,1]]
