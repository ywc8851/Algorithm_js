/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let ans = 0;
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i + 1);
  }
  while (arr.length !== 1) {
    let cnt = 1;
    while (1) {
      if (cnt === k) {
        arr.shift();
        break;
      } else {
        arr.push(arr.shift());
      }
      cnt++;
    }
  }
  return arr[0];
};
