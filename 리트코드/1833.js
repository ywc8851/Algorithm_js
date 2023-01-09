/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  const sortCoins = costs.sort((a, b) => a - b);
  let cnt = 0;

  for (let i = 0; i < sortCoins.length; i++) {
    if (sortCoins[i] <= coins) {
      coins -= sortCoins[i];
      cnt++;
    } else break;
  }

  return cnt;
};
