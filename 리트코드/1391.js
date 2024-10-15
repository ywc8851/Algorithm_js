/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const g = Array.from({ length: m * 3 }, () => Array(n * 3).fill(false));

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      switch (grid[i][j]) {
        case 1:
          g[i * 3 + 1][j * 3 + 0] = true;
          g[i * 3 + 1][j * 3 + 1] = true;
          g[i * 3 + 1][j * 3 + 2] = true;
          break;
        case 2:
          g[i * 3 + 0][j * 3 + 1] = true;
          g[i * 3 + 1][j * 3 + 1] = true;
          g[i * 3 + 2][j * 3 + 1] = true;
          break;
        case 3:
          g[i * 3 + 1][j * 3 + 0] = true;
          g[i * 3 + 1][j * 3 + 1] = true;
          g[i * 3 + 2][j * 3 + 1] = true;
          break;
        case 4:
          g[i * 3 + 1][j * 3 + 1] = true;
          g[i * 3 + 1][j * 3 + 2] = true;
          g[i * 3 + 2][j * 3 + 1] = true;
          break;
        case 5:
          g[i * 3 + 0][j * 3 + 1] = true;
          g[i * 3 + 1][j * 3 + 0] = true;
          g[i * 3 + 1][j * 3 + 1] = true;
          break;
        case 6:
          g[i * 3 + 0][j * 3 + 1] = true;
          g[i * 3 + 1][j * 3 + 1] = true;
          g[i * 3 + 1][j * 3 + 2] = true;
          break;
      }
    }
  }
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  const dfs = (g, i, j) => {
    if (i < 0 || i === g.length || j < 0 || j === g[0].length) return false;
    if (g[i][j] === false) return false;
    if (i === g.length - 2 && j === g[0].length - 2) return true;

    g[i][j] = false;

    for (let d = 0; d < 4; ++d) {
      const ni = i + dx[d];
      const nj = j + dy[d];

      if (dfs(g, ni, nj)) return true;
    }

    return false;
  };

  return dfs(g, 1, 1);
};
