/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  const map = { 0: 1 };
  let prefixSum = 0;
  let ans = 0;

  for (const num of nums) {
    prefixSum += num;
    let remain = prefixSum % k;
    if (remain < 0) remain += k;
    ans += map[remain] || 0;
    map[remain] = (map[remain] || 0) + 1;
  }
  return ans;
};
