function solution(nums, k) {
  var answer = 0;
  let left = 0;
  let cnt = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) cnt++;

    while (cnt > k) {
      if (nums[left] === 0) {
        cnt--;
        left++;
      } else {
        left++;
      }
    }
    if (cnt <= k) {
      // 답이 되는 조건
      answer = Math.max(answer, right - left + 1);
    }
  }
  return answer;
}
