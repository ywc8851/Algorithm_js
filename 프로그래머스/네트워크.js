function solution(n, computers) {
  var answer = 0;
  let visited = new Array(n + 1).fill(0);

  function DFS(start) {
    visited[start] = 1;
    for (let i = 0; i < computers.length; i++) {
      if (computers[start][i] === 1 && visited[i] === 0) {
        DFS(i);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    else {
      DFS(i);
      answer++;
    }
  }
  return answer;
}
