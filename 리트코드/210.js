/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(n, seq) {
  let indegrees = new Array(n).fill(0);
  let graph = new Array(n + 1);
  for (let i = 0; i < graph.length; i++) {
    graph[i] = [];
  }
  for (let i = 0; i < seq.length; i++) {
    let from = seq[i][0];
    let to = seq[i][1];
    graph[to].push(from);
    indegrees[from]++;
  }
  //   console.log(graph);
  //   console.log(indegrees);
  let queue = [];
  for (let i = 0; i < n; i++) {
    if (indegrees[i] === 0) {
      queue.push(i);
    }
  }
  //   console.log(queue);
  let ans = [];
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let x = queue.shift();
      ans.push(x);
      for (let i = 0; i < graph[x].length; i++) {
        indegrees[graph[x][i]]--;
        if (indegrees[graph[x][i]] === 0) {
          queue.push(graph[x][i]);
        }
      }
    }
  }
  let flag = true;
  //   console.log(indegrees);
  for (let i = 0; i < indegrees.length; i++) {
    if (indegrees[i] !== 0) {
      flag = false;
      break;
    }
  }
//   console.log(flag);
  let empty = [];
  if (flag) {
    return (ans);
  } else {
    return (empty);
  }
};
