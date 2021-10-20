class minHeap {
  constructor() {
    this.heap = [];
    this.heap.push([Number.MIN_SAFE_INTEGER, 0]);
  }
  insert([a, b]) {
    this.heap.push([a, b]);
    this.upheap(this.heap.length - 1);
  }
  upheap(pos) {
    let tmp = this.heap[pos];
    while (tmp[1] < this.heap[parseInt(pos / 2)][1]) {
      this.heap[pos] = this.heap[parseInt(pos / 2)];
      pos = parseInt(pos / 2);
    }
    this.heap[pos] = tmp;
  }
  get() {
    if (this.heap.length === 2) {
      return this.heap.pop();
    }
    let res;
    res = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.downheap(1, this.heap.length - 1);
    return res;
  }
  downheap(pos, len) {
    let tmp, i;
    tmp = this.heap[pos];
    while (pos <= parseInt(len / 2)) {
      i = pos * 2;
      if (i < len && this.heap[i][1] < this.heap[i + 1][1]) i++;
      if (tmp[1] <= this.heap[i][1]) break;
      this.heap[pos] = this.heap[i];
      pos = i;
    }
    this.heap[pos] = tmp;
  }
  size() {
    return this.heap.length - 1;
  }
  top() {
    return this.heap[1];
  }
}
function solution(n, edge) {
  var answer = 0;
  let pq = new minHeap();
  let graph = Array.from(Array(n + 1), () => Array());
  let dist = Array.from({ length: n + 1 }, () => Infinity);
  for (let [a, b] of edge) {
    graph[a].push(b);
    graph[b].push(a);
  }
  dist[0] = 0;
  dist[1] = 0;
  pq.insert([1, 0]);
  while (pq.size() > 0) {
    let tmp = pq.get();
    let now = tmp[0];
    let nowCost = tmp[1];
    if (nowCost > dist[now]) continue;
    for (let next of graph[now]) {
      if (nowCost + 1 < dist[next]) {
        dist[next] = nowCost + 1;
        pq.insert([next, dist[next]]);
      }
    }
  }
  let maxDist = Math.max(...dist);
  for (let x of dist) {
    if (x === maxDist) answer++;
  }
  return answer;
}

