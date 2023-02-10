/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const len = nums.length;
  const dp = Array.from({ length: len }, () => Infinity);
  dp[0] = 0;
  for (let i = 0; i < len; i++) {
    const cur = nums[i];

    for (let j = 0; j <= cur; j++) {
      dp[i + j] = Math.min(dp[i + j], dp[i] + 1);
    }
  }
  return dp[len - 1];
};
