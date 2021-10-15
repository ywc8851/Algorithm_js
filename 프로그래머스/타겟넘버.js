function solution(numbers, target) {
  let cnt = 0;

  function dfs(level, sum) {
    if (level === numbers.length) {
      if (sum === target) {
        cnt++;
      }
      return;
    }
    dfs(level + 1, sum + numbers[level]);
    dfs(level + 1, sum - numbers[level]);
  }

  dfs(0, 0);
  return cnt;
}
