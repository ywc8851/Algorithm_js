function solution(cards) {
  let ans = 0;
  let changePossible = Array.from({ length: cards.length }, () => true);
  const findMinIndex = (nums) => {
    const min = Math.min(...nums);
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === min) return i;
    }
  };

  const isSameMinValue = (nums) => {
    const min = Math.min(...nums);
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === min) arr.push(i);
    }

    return arr.length > 1 ? true : false;
  };
  for (let i = 0; i < cards.length; i++) {
    for (let j = 0; j < cards.length; j++) {
      if (i !== j && changePossible[i] && changePossible[j]) {
        let iIdx = findMinIndex(cards[i]);
        let jIdx = findMinIndex(cards[j]);
        if (iIdx === jIdx || isSameMinValue(cards[i]) || isSameMinValue(cards[j])) continue;
        else {
          let iCur = cards[i][iIdx];
          let jCur = cards[j][jIdx];
          if (cards[i][jIdx] - 1 > iCur && cards[j][iIdx] - 1 > jCur) {
            // 교환 가능
            cards[i][jIdx]--;
            cards[j][jIdx]++;

            cards[j][iIdx]--;
            cards[i][iIdx]++;
            changePossible[i] = false;
            changePossible[j] = false;
          }
        }
      }
    }
  }
  for (let i = 0; i < cards.length; i++) {
    ans += Math.min(...cards[i]);
  }
  return ans;
}

console.log(
  solution([
    [6, 6, 18],
    [11, 11, 8],
  ])
); // 6+8=14
