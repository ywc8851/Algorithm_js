function solution(atmos) {
  let ans = 0;
  let maskCnt = 0;
  for (let i = 0; i < atmos.length; i++) {
    const [a, b] = atmos[i];

    if (a < 81 && b < 36) {
      if (maskCnt > 0) maskCnt--;
      continue;
    } else {
      if (a > 150 && b > 75) {
        if (maskCnt > 0) maskCnt = 0;
        else ans++;

        maskCnt = 0;
      } else {
        if (maskCnt > 0) maskCnt--;
        else {
          ans++;
          maskCnt = 2;
        }
      }
    }
  }

  return ans;
}
