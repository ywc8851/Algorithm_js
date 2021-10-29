class minHeap {
  constructor() {
    this.heap = [];
    this.heap.push(-Infinity); // 무한대 루트노드에 넣기
  }
  insert(val) {
    this.heap.push(val); // 배열에 일단 값 삽입
    this.upheap(this.heap.length - 1); // 배열 위치 자동변경
  }
  upheap(pos) {
    let tmp = this.heap[pos]; // 현재 값 tmp에 저장
    while (tmp < this.heap[parseInt(pos / 2)]) {
      // 부모노드와 비교하여 큰 경우 계속 루트쪽으로 올라감
      this.heap[pos] = this.heap[parseInt(pos / 2)]; // 부모노드보다 크면 부모노드가 현재노드로 옴
      pos = parseInt(pos / 2); // 부모노드의 index 번호로 변경
    }
    this.heap[pos] = tmp; // 부모노드 보다 tmp가 작은 상태이므로 heap[pos]에 tmp값을 넣어줌
  }
  get() {
    if (this.heap.length === 2) return this.heap.pop();
    let res = this.heap[1];
    this.heap[1] = this.heap.pop(); // 맨 마지막 노드를 루트(인덱스1) 노드에 넣음  *인덱스0:INFINITy
    this.downheap(1, this.heap.length - 1);
    return res; // 제일 작은 값 반환
  }
  downheap(pos, len) {
    let tmp = this.heap[pos],
      child;
    while (pos <= parseInt(len / 2)) {
      // 마지막 부모까지만 내려간다
      child = pos * 2;
      // pos의 왼쪽자식, 오른쪽자식 비교
      if (child < len && this.heap[child] > this.heap[child + 1]) child++;
      // tmp가 자식보다 작으면 멈춤
      if (tmp <= this.heap[child]) break;
      this.heap[pos] = this.heap[child]; // 자식 값이 부모값으로 이등
      pos = child;
    }
    this.heap[pos] = tmp;
  }
  size() {
    return this.heap.length - 1;
  }
  front() {
    return this.heap[1];
  }
}
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = Number(input[0]); // 연산의 개수
let index = 1;
let minQueue = new minHeap();
let result = "";
while (index <= n) {
  if (Number(input[index]) === 0) {
    // 가장 작은 값 출력하고 제거
    if (minQueue.size() === 0) {
      // console.log(0);
      result += `0\n`;
    } else {
      //   console.log(minQueue.front());
      result += `${minQueue.front()}\n`;
      minQueue.get();
    }
  } else {
    // input[index]값 배열에 넣기
    minQueue.insert(Number(input[index]));
  }
  index++;
}
console.log(result.trim());
