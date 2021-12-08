/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (arr, k) {
  let sum = arr.reduce((a, b) => a + b);
  let left = 1;
  let right = sum;
  let ans = Infinity;
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    let cnt = 1;
    let cur = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > mid) {
        cnt = Infinity;
        break;
      }
      if (cur + arr[i] <= mid) {
        cur += arr[i];
      } else {
        cnt++;
        cur = arr[i];
      }
    }
    if (cnt <= k) {
      if (mid < ans) {
        ans = mid;
      }
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
};
