const [n, m, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

let left = (sum = ans = 0);

for (let right = 0; right < arr.length; right++) {
  sum += arr[right];
  while (sum > m) {
    sum -= arr[left++];
  }
  if (sum === m) {
    ans++;
  }
}
console.log(ans);
