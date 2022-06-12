function solution(p) {
  const ans = Array.from({ length: p.length }, () => 0);

  for (let i = 0; i < p.length; i++) {
    const arr = [...p];
    let min = p[i];
    let minIdx = i;
    for (let j = i + 1; j < p.length; j++) {
      if (min > p[j]) {
        min = p[j];
        minIdx = j;
      }
    }

    if (min !== p[i]) {
      let tmp = p[i];
      p[i] = min;
      p[minIdx] = tmp;
      for (let k = 0; k < p.length; k++) {
        if (arr[k] !== p[k]) {
          ans[k]++;
        }
      }
    }
  }
  return ans;
}

console.log(solution([2, 5, 3, 1, 4])); // [1,1,0,3,1]
console.log(solution([2, 3, 4, 5, 6, 1])); // [1,1,1,1,1,5]
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [1,1,0,3,1]
