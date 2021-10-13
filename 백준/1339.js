const [n, ...arr] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(/\s+/);

let hash_map = new Map();
let cnt = (ans = 0);
let cur = 9;
//자릿수 계산
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    cnt = Math.pow(10, arr[i].length - (j + 1));
    hash_map.set(arr[i][j], (hash_map.get(arr[i][j]) || 0) + cnt);
  }
}
// 알파벳의 계수순으로 내림차순 정렬
const sort_map = new Map([...hash_map.entries()].sort((a, b) => b[1] - a[1]));
// v를 9부터 차례대로 곱해서 ans에저장
for (let [k, v] of sort_map) {
  ans += v * cur;
  cur--;
}
console.log(ans);
