/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
  s = s.split("");
  const len = s.length;
  const zero = new Array(len).fill(0);

  if (s[0] == "0") zero[0] = 1;

  for (let i = 1; i < len; i++) {
    if (s[i] === "1") zero[i] = zero[i - 1];
    else zero[i] = zero[i - 1] + 1;
  }

  let ans = zero[len - 1];

  for (let i = 0; i < len; i++) {
    let leftCnt = i + 1 - zero[i];
    let rightCnt = zero[len - 1] - zero[i];
    ans = Math.min(ans, leftCnt + rightCnt);
  }
  return ans;
};
