function solution(gems) {
  var answer = [];
  let hash1 = new Map();
  let hash2 = new Map();
  for (let i = 0; i < gems.length; i++) {
    hash1.set(gems[i], (hash1.get(gems[i]) || 0) + 1);
  }
  let correct_size = hash1.size; // 보석의 모든 종류

  // 투포인터 실행
  let left = 0;
  let len = 100001;
  for (let right = 0; right < gems.length; right++) {
    hash2.set(gems[right], (hash2.get(gems[right]) || 0) + 1);
    while (hash2.size >= correct_size) {
      if (right - left < len) {
        answer[0] = left + 1;
        answer[1] = right + 1;
        len = right - left;
      }

      hash2.set(gems[left], (hash2.get(gems[left]) || 0) - 1);
      if (hash2.get(gems[left]) <= 0) {
        hash2.delete(gems[left]);
      }
      left++;
    }
  }
  return answer;
}
