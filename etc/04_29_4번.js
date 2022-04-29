function solution(nums) {
  let ans = 0;

  while (1) {
    let maxVal = 0;
    for (let i = 1; i < nums.length - 1; i++) {
      maxVal = Math.max(maxVal, nums[i]);
    }
    for (let i = 1; i < nums.length - 1; i++) {
      if (nums[i] === maxVal) {
        maxIdx = i;
        break;
      }
    }
    if (nums.length > 3) {
      ans += nums[maxIdx - 1] * nums[maxIdx] * nums[maxIdx + 1];
    } else {
      ans += nums[0] * nums[1] * nums[2];
      break;
    }
    nums.splice(maxIdx, 1);
  }
  return ans;
}
