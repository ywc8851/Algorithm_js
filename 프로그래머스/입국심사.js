function solution(n, times) {
  var answer = Infinity;
  times = times.sort((a, b) => a - b); // 오름차순 정렬
  let left = 1;
  let right = times[times.length - 1] * n;

  // 이분탐색 시작
  while (left <= right) {
    let cnt = 0;
    let mid = parseInt((left + right) / 2);
    // 조건에 맞는 mid인지 검사
    for (let i = 0; i < times.length; i++) {
      cnt += parseInt(mid / times[i]);
    }
    if (cnt >= n) {
      right = mid - 1;
      answer = Math.min(answer, mid);
    } else {
      left = mid + 1;
    }
  }
  return answer;
}

