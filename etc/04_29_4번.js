function wrongSolution(nums) {
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

function correctSolution(nums) {
  let n = nums.length;
  let dy = Array.from(Array(n), () => Array(n).fill(0));
  for (let i = 1; i < n - 1; i++) {
    dy[i - 1][i + 1] = nums[i - 1] * nums[i] * nums[i + 1];
  }
  for (let j = 2; j < n; j++) {
    for (let i = 0; i < n - j; i++) {
      dy[i][i + j] = Infinity;
      for (let k = i + 1; k < i + j; k++) {
        dy[i][i + j] = Math.min(dy[i][i + j], dy[i][k] + dy[k][i + j] + nums[i] * nums[k] * nums[i + j]);
      }
    }
  }
  return dy[0][n - 1];
}

console.log(correctSolution([10, 1, 50, 50, 20, 5])); // 3650
