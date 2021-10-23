function solution(nums) {
  let answer = 0;
  let len = nums.length;
  let dp = new Array(len + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(len + 1).fill(0);
  }
  for (let i = 0; i < len; i++) {
    dp[i][i] = 1;
  }
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let diff = nums[j] - nums[i];
      dp[i][j] = 2;
      let cur = nums[i];
      let cnt = 1;
      for (let k = i - 1; k >= 0; k--) {
        if (nums[k] === cur - diff) {
          dp[k][j] = cnt + dp[i][j];
          cur = nums[k];
          cnt++;
        }
      }
    }
  }
  //   console.log(dp);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      answer = Math.max(answer, dp[i][j]);
    }
  }
  return answer;
}
