/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  const graph = {};
  for (let [from, to, price] of flights) {
    if (!graph[to]) graph[to] = [];
    graph[to].push([from, price]);
  }
  console.log(graph);
  let ans = Infinity;
  const dfs = (curNode, sum, cnt) => {
    if (cnt > k || sum >= ans) return;

    if (curNode === src) {
      ans = Math.min(ans, sum);
      return;
    }
    if (!graph[curNode]) return;
    for (let [to, price] of graph[curNode]) dfs(to, sum + price, cnt + 1);
  };

  dfs(dst, 0, -1);
  return ans === Infinity ? -1 : ans;
};

console.log(
  findCheapestPrice(
    4,
    [
      [0, 1, 100],
      [1, 2, 100],
      [2, 0, 100],
      [1, 3, 600],
      [2, 3, 200],
    ],
    0,
    3,
    1
  )
);
