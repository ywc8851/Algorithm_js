/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
  let ans = new Array(n).fill(Infinity);
  let len = primes.length;
  let prime_count = new Array(len).fill(0);
  ans[0] = 1;
  for (let i = 1; i < n; i++) {
    let p = 0;
    for (let j = 0; j < len; j++) {
      if (ans[i] > primes[j] * ans[prime_count[j]]) {
        ans[i] = primes[j] * ans[prime_count[j]]; // 최솟값 구하여 대입
      }
    }
    for (let k = 0; k < len; k++) {
      if (ans[i] === primes[k] * ans[prime_count[k]]) prime_count[k]++; // 최솟값인 경우 해당 소수 count 1증가
    }
  }
  return ans[n - 1]; // n번째 수 반환
};
