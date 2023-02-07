/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let arr = [];
  let cnt = 0;
  let isIncrease = true;
  for (let i = 0; i < s.length; i++) {
    if (!arr[cnt]) arr[cnt] = [];
    arr[cnt].push(s[i]);

    cnt = isIncrease ? cnt + 1 : cnt - 1;

    if (cnt + 1 === numRows) isIncrease = false;
    else if (cnt === 0) isIncrease = true;
  }

  let ans = "";
  for (let i of arr) {
    ans += i.join("");
  }
  return ans;
};

console.log(convert("PAYPALISHIRING", 4));
