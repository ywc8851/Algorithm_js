let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let n = input[0];
let arr = input[1].split(" ").map(Number);
let sum = 0;
let ans = 0;
arr.sort(function(a, b) { 
    return a - b; 
});

for (let i = 0; i < n; i++) {
  sum += arr[i];
  ans += sum;
}
console.log(ans);
