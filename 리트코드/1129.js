/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
  const makeGraph = (edges) => {
    const graph = {};
    for (const [x, y] of edges) {
      if (!graph[x]) graph[x] = [];
      graph[x].push(y);
    }
    return graph;
  };

  const colorMap = {};
  colorMap["red"] = makeGraph(redEdges);
  colorMap["blue"] = makeGraph(blueEdges);

  const ans = new Array(n).fill(-1);
  let q = [];
  const visited = new Set();
  let cnt = 0;

  q.push(["red", 0]);
  q.push(["blue", 0]);
  visited.add("blue-0");
  visited.add("red-0");

  while (q.length) {
    const newQ = [];

    for (const [color, index] of q) {
      ans[index] = ans[index] === -1 ? cnt : Math.min(cnt, ans[index]);
      if (!colorMap[color][index]) continue;

      for (const path of colorMap[color][index]) {
        const key = `${color}-${path}`;
        if (visited.has(key)) continue;
        visited.add(key);

        const newColor = color === "red" ? "blue" : "red";
        newQ.push([newColor, path]);
      }
    }
    q = newQ;
    cnt++;
  }
  return ans;
};
