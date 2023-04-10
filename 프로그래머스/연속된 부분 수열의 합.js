function solution(sequence, k) {
  let answer = [];
  let answerLen = Infinity;
  let left = 0;
  let right = 0;
  let sum = sequence[0];

  while (left < sequence.length && right < sequence.length && left <= right) {
    if (sum === k) {
      if (answerLen > right - left + 1) {
        answer = [left, right];
        answerLen = right - left + 1;
      }
      right++;
      sum += sequence[right];
    } else if (sum < k) {
      right++;
      sum += sequence[right];
    } else {
      sum -= sequence[left];
      left++;
    }
  }

  return answer;
}
