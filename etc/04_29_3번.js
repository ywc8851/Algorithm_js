function solution(prices, d, k) {
  var answer = 0;

  const len = prices.length;
  prices.sort((a, b) => a - b);

  let sumPrice = 0;
  for (const price of prices) sumPrice += price;

  // 1
  if (Math.abs(prices[0] - prices[prices.length - 1]) <= d) return Math.floor(sumPrice / len);

  // 2
  if (Math.abs(prices[1] - prices[prices.length - 2]) <= d) return Math.floor((sumPrice - prices[0] - prices[prices.length - 1]) / (len - 2));

  // 3
  const select = prices.slice(0, k);
  let selectSum = 0;
  for (let i = 0; i < k; i++) selectSum += prices[i];
  if (Math.abs(select[0] - select[select.length - 1]) <= d) return Math.floor(selectSum / k);

  // 4
  return prices[Math.ceil(len / 2) - 1];
}
console.log(solution([4, 5, 6, 7, 8], 4, 3));
console.log(solution([4, 5, 6, 7, 8], 2, 1));
console.log(solution([4, 5, 6, 7, 8], 1, 2));
console.log(solution([8, 4, 5, 7, 8], 1, 3));
console.log(solution([1, 8, 1, 8, 1, 8], 6, 4));
