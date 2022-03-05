function solution(h, w, n, board) {
  let ans = 0;
  board = board.map((e) => e.split('').map(Number));
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (!board[i][j]) continue;

      if (board[i][j]) {
        // 가로 ➡
        let cnt = 1;
        for (let k = 1; k < n; k++) {
          if (j + k <= w - 1 && board[i][j + k]) cnt++;
          else break;
        }
        if (j + n < w) {
          if (board[i][j + n]) continue;
        }
        if (j - 1 >= 0) {
          if (board[i][j - 1]) continue;
        }

        if (cnt === n) {
          ans++;
        }
      }
    }
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (!board[i][j]) continue;

      if (board[i][j]) {
        // 세로 ⬇
        let cnt_sero = 1;
        for (let k = 1; k < n; k++) {
          if (i + k <= h - 1 && board[i + k][j]) cnt_sero++;
          else break;
        }
        if (i + n < h) {
          if (board[i + n][j]) continue;
        }
        if (i - 1 >= 0) {
          if (board[i - 1][j]) continue;
        }
        if (cnt_sero === n) {
          ans++;
        }
      }
    }
  }
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (!board[i][j]) continue;

      if (board[i][j]) {
        // 오른쪽대각선 ↘
        let cnt_right = 1;
        for (let k = 1; k < n; k++) {
          if (i + k <= h - 1 && j + k <= w - 1 && board[i + k][j + k])
            cnt_right++;
          else break;
        }
        if (i + n < h && j + n < w) {
          if (board[i + n][j + n]) continue;
        }
        if (i - 1 >= 0 && j - 1 >= 0) {
          if (board[i - 1][j - 1]) continue;
        }
        if (cnt_right === n) {
          ans++;
        }
      }
    }
  }
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (!board[i][j]) continue;

      if (board[i][j]) {
        // 왼쪽대각선 ↙
        let cnt_left = 1;
        for (let k = 1; k < n; k++) {
          if (i + k <= h - 1 && j - k >= 0 && board[i + k][j - k]) cnt_left++;
          else break;
        }
        if (i + n < h && j - n >= 0) {
          if (board[i + n][j - n]) continue;
        }
        if (i - 1 >= 0 && j + 1 < w) {
          if (board[i - 1][j + 1]) continue;
        }
        if (cnt_left === n) {
          ans++;
        }
      }
    }
  }
  return ans;
}

console.log(
  solution(7, 9, 4, [
    '111100000',
    '000010011',
    '111100011',
    '111110011',
    '111100011',
    '111100010',
    '111100000',
  ])
); // 10

console.log(solution(5, 5, 5, ['11111', '11111', '11111', '11111', '11111'])); // 12
