function solution(n, info) {
  function generateCombinations() {
    const combinations = [];
    const current = [];

    function backtrack(index) {
      if (index === 11) {
        combinations.push([...current]);
        return;
      }

      current.push(false);
      backtrack(index + 1);
      current.pop();

      current.push(true);
      backtrack(index + 1);
      current.pop();
    }

    backtrack(0);
    return combinations;
  }

  function checkScore(arr1, arr2) {
    for (let i = arr1.length - 1; i >= 0; i--) {
      if (arr1[i] > arr2[i]) return arr1;
      if (arr2[i] > arr1[i]) return arr2;
    }

    return arr1;
  }

  const result = generateCombinations();
  let ans = [];
  let scoreDiff = 0;

  for (let i = 0; i < result.length; i++) {
    const arr = result[i];

    let lionScore = 0;
    let appeachScore = 0;
    let cntArr = [];

    for (let j = 0; j < arr.length; j++) {
      const curScore = 10 - j;
      const appeach = info[j];

      if (arr[j]) {
        cntArr.push(appeach + 1);
        lionScore += curScore;
      } else {
        if (appeach !== 0) appeachScore += curScore;

        cntArr.push(0);
      }
    }
    const lionCnt = cntArr.reduce((a, b) => a + b);

    if (lionCnt > n) continue;
    else if (lionScore <= appeachScore) continue;
    else {
      let curScoreDiff = lionScore - appeachScore;
      if (lionCnt < n) {
        cntArr[cntArr.length - 1] += n - lionCnt;
      }
      if (scoreDiff < curScoreDiff) {
        scoreDiff = curScoreDiff;
        ans = cntArr;
      } else if (scoreDiff === curScoreDiff) {
        ans = checkScore(ans, cntArr);
      }
    }
  }

  if (ans.length === 0) return [-1];
  else return ans;
}

console.log(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3])); // 	[1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2]
