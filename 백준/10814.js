let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);

let arr = new Array(n);

for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(3);
}

for (let i = 0; i < n; i++) {
  arr[i][0] = input[i + 1].split(" ")[0];
  arr[i][1] = input[i + 1].split(" ")[1];
  arr[i][2] = i + 1;
}

arr.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[2] - b[2]));

for (let i = 0; i < n; i++) {
  console.log(arr[i][0], arr[i][1]);
}
