let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let stones = new Array(n);
for (let i = 0; i < stones.length; i++) {
  // stones -> 넓이, 높이, 무게, 그 벽돌의 index
  stones[i] = new Array(4);
}
for (let i = 0; i < n; i++) {
  stones[i] = input[i + 1].split(" ").map(Number);
  stones[i][3] = i + 1;
}
stones.sort((a, b) => a[0] - b[0]); // 밑면넓이 기준 오름차순정렬
// dp[n] = n개 상자를 쌓았을 때 가능한 최대높이
let dp = new Array(n).fill(0);

// 각 상자의 높이로 초기화
for (let i = 0; i < n; i++) {
  dp[i] = stones[i][1];
}

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    // 밑면의 넓이는 오름차순이므로 당연히 i가 j보다 크다
    // 따라서 무게가 더 큰경우에만 넣을 수 있음
    if (stones[j][2] < stones[i][2]) {
      dp[i] = Math.max(dp[i], stones[i][1] + dp[j]);
    }
  }
}

let max = Math.max(...dp);
let answer = []; // 길이가 벽돌의 수
// 쌓은 벽돌 추적하기
for (let i = dp.length - 1; i >= 0; i--) {
  if (max == dp[i]) {
    answer.push(stones[i][3]);
    max -= stones[i][1];
  }
}
console.log(answer.length);
answer.reverse();
answer.forEach((a) => console.log(a));
