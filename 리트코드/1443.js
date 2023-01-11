/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function (n, edges, hasApple) {
  const apples = new Set();
  const isVisited = new Map();
  const graph = new Map();

  for (let i = 0; i < hasApple.length; i++) if (hasApple[i]) apples.add(i);

  if (apples.length === 0) return 0;

  for (let i = 0; i < edges.length; i++) {
    const [start, end] = edges[i];
    graph.set(start, graph.has(start) ? [...graph.get(start), end] : [end]);
    graph.set(end, graph.has(end) ? [...graph.get(end), start] : [start]);
  }

  const dfs = (node) => {
    isVisited.set(node, true);
    let subTree = graph.get(node);
    let cnt = 0;

    if (subTree) {
      for (let i = 0; i < subTree.length; i++) {
        let n = subTree[i];

        if (!isVisited.has(n)) cnt += dfs(n);
      }
    }

    if (node === 0) return cnt;

    if (cnt > 0 || apples.has(node)) {
      apples.delete(node);
      cnt += 2;
    }

    return cnt;
  };

  return dfs(0);
};
