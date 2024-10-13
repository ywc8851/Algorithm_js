function solution(board, skill) {
  const prefixSum = Array.from({ length: board.length + 1 }, () =>
    Array.from({ length: board[0].length + 1 }, () => 0)
  );
  for (let i = 0; i < skill.length; i++) {
    const [type, r1, c1, r2, c2, degree] = skill[i];
    const amount = type === 1 ? -degree : degree;

    prefixSum[r1][c1] += amount;
    prefixSum[r2 + 1][c2 + 1] += amount;
    prefixSum[r1][c2 + 1] -= amount;
    prefixSum[r2 + 1][c1] -= amount;
  }

  for (let r = 0; r < prefixSum.length; r++) {
    for (let c = 1; c < prefixSum[0].length; c++) {
      prefixSum[r][c] += prefixSum[r][c - 1];
    }
  }
  for (let r = 1; r < prefixSum.length; r++) {
    for (let c = 0; c < prefixSum[0].length; c++) {
      prefixSum[r][c] += prefixSum[r - 1][c];
    }
  }

  let ans = 0;
  for (let i = 0; i < prefixSum.length - 1; i++) {
    for (let j = 0; j < prefixSum[0].length - 1; j++) {
      board[i][j] += prefixSum[i][j];

      if (board[i][j] > 0) ans++;
    }
  }

  return ans;
}

console.log(
  solution(
    [
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
    ],
    [
      [1, 0, 0, 3, 4, 4],
      [1, 2, 0, 2, 3, 2],
      [2, 1, 0, 3, 1, 2],
      [1, 0, 1, 3, 3, 1],
    ]
  )
); // 10
