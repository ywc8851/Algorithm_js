/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  let ans = 0;
  for (let i = low; i <= high; i++) if (i % 2) ans += 1;

  return ans;
};
