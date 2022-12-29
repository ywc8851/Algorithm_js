/**
 * @param {number[][]} tasks
 * @return {number[]}
 */

class minHeap {
  constructor(comparator = (a, b) => a > b) {
    this.heap = [];
    this.top = 0;
    this.comparator = comparator;
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    return this.heap[this.top];
  }
  push(...values) {
    values.forEach((value) => {
      this.heap.push(value);
      this.siftUp();
    });
    return this.size();
  }
  pop() {
    const poppedValue = this.peek();
    const bottom = this.size() - 1;
    if (bottom > this.top) {
      this.swap(this.top, bottom);
    }
    this.heap.pop();
    this.siftDown();
    return poppedValue;
  }
  replace(value) {
    const replacedValue = this.peek();
    this.heap[this.top] = value;
    this.siftDown();
    return replacedValue;
  }

  parent = (i) => ((i + 1) >>> 1) - 1;
  left = (i) => (i << 1) + 1;
  right = (i) => (i + 1) << 1;
  greater = (i, j) => this.comparator(this.heap[i], this.heap[j]);
  swap = (i, j) =>
    ([this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]);
  siftUp = () => {
    let node = this.size() - 1;
    while (node > this.top && this.greater(node, this.parent(node))) {
      this.swap(node, this.parent(node));
      node = this.parent(node);
    }
  };
  siftDown = () => {
    let node = this.top;
    while (
      (this.left(node) < this.size() && this.greater(this.left(node), node)) ||
      (this.right(node) < this.size() && this.greater(this.right(node), node))
    ) {
      let maxChild =
        this.right(node) < this.size() &&
        this.greater(this.right(node), this.left(node))
          ? this.right(node)
          : this.left(node);
      this.swap(node, maxChild);
      node = maxChild;
    }
  };
}

function compare(a, b) {
  if (a[0] < b[0]) return true;
  else if (a[0] > b[0]) return false;
  else {
    return a[1] < b[1];
  }
}

const getOrder = function (tasks) {
  const pq = new minHeap(compare);
  const n = tasks.length;
  const ans = [];
  let curIndex = 0;
  for (let i = 0; i < n; i++) tasks[i].push(i);
  tasks.sort((a, b) => a[0] - b[0]);
  let time = tasks[0][0];

  while (curIndex < n || !pq.isEmpty()) {
    while (curIndex < n && tasks[curIndex][0] <= time) {
      pq.push([tasks[curIndex][1], tasks[curIndex][2]]);
      curIndex++;
    }

    if (!pq.isEmpty()) {
      const [processTime, idx] = pq.pop();
      time += processTime;
      ans.push(idx);
    } else if (curIndex < n) {
      time = tasks[curIndex][0];
    }
  }

  return ans;
};

console.log(
  getOrder([
    [1, 2],
    [2, 4],
    [3, 2],
    [4, 1],
  ])
);
