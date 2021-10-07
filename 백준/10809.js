let input = require("fs").readFileSync("/dev/stdin").toString();
let ans = [];

// 아스키코드를 이용해서 fromCharCode로 알파벳으로 변환후 indexOf 메서드로 처음 나오는 알파벳의 index로 ans배열 갱신
for (let i = 97; i <= 122; i++) {
  ans.push(input.indexOf(String.fromCharCode(i)));
}
console.log(ans.join(" "));

