/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function (scores, ages) {
  let arr = [];
  const n = scores.length;

  for (let i = 0; i < n; i++) arr.push([ages[i], scores[i]]);

  arr.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

  let ans = new Array(n).fill(0);
  ans[0] = arr[0][1];

  for (let i = 1; i < arr.length; i++) {
    const [curAge, curScore] = arr[i];
    ans[i] = curScore;

    for (let j = i - 1; j >= 0; j--) {
      const [prevAge, prevScore] = arr[j];

      if (prevAge === curAge) ans[i] = Math.max(ans[i], ans[j] + curScore);
      else if (curScore >= prevScore) {
        ans[i] = Math.max(ans[i], ans[j] + curScore);
      }
    }
  }

  return Math.max(...ans);
};

console.log(
  bestTeamScore(
    [
      319776, 611683, 835240, 602298, 430007, 574, 142444, 858606, 734364,
      896074,
    ],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  )
); // 5431066
