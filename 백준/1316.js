let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input[0]);
let cnt = n;
for (let i = 0; i < n; i++) {
  let check = new Array(26).fill(false);
  let str = input[i + 1].trim();
  for (let j = 0; j < str.length; j++) {
    if (check[str.charCodeAt(j) - 97] === false) {
      check[str.charCodeAt(j) - 97] = true;
    } else {
      if (str[j] !== str[j - 1]) {
        cnt--;
        break;
      }
    }
  }
}
console.log(cnt);
