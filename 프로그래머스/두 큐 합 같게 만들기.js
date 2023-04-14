function solution(queue1, queue2) {
  let answer = Infinity;

  const queueSum =
    queue1.reduce((a, b) => a + b) + queue2.reduce((a, b) => a + b);
  const ansSum = queueSum / 2;
  const arr = [...queue1, ...queue2];

  let left = 0;
  let right = queue1.length;
  let currentSum = arr.slice(left, right).reduce((a, b) => a + b);
  let cnt = 0;
  const maxCnt = arr.length * 2;

  while (cnt <= maxCnt) {
    if (currentSum === ansSum) return cnt;

    if (currentSum < ansSum) currentSum += arr[right++];
    else if (currentSum > ansSum) currentSum -= arr[left++];

    cnt++;
  }

  return -1;
}
