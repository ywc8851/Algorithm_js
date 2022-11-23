const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [row, col, operCnt] = input.shift().split(" ").map(Number);
const operArr = input.pop().split(" ").map(Number);
let arr = input.map((i) => i.split(" ").map(Number));

const rotateRight = (arr) => {
  const n = arr.length;
  const m = arr[0].length;
  const rotateArr = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => 0)
  );

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      rotateArr[i][j] = arr[n - j - 1][i];
    }
  }
  return rotateArr;
};

const partialRotateRight = (arr) => {
  const n = arr.length / 2,
    m = arr[0].length / 2;
  const top = arr.slice(0, n),
    bottom = arr.slice(n);
  const part1 = top.map((row) => row.slice(0, m)),
    part2 = top.map((row) => row.slice(m)),
    part3 = bottom.map((row) => row.slice(0, m)),
    part4 = bottom.map((row) => row.slice(m));
  return [
    ...part3.map((row, i) => [...row, ...part1[i]]),
    ...part4.map((row, i) => [...row, ...part2[i]]),
  ];
};

const operation = (arr, operType) => {
  let newArr = [];
  switch (operType) {
    // 상하 반전
    case 1:
      newArr = [...arr].reverse();
      break;

    // 좌우 반전
    case 2:
      arr.forEach((rowInfo) => {
        newArr.push(rowInfo.reverse());
      });
      break;

    // 오른쪽 90도 회전
    case 3:
      newArr = rotateRight(arr);
      break;

    // 왼쪽 90도 회전
    case 4:
      newArr = rotateRight(rotateRight(rotateRight(arr)));
      break;

    // 부분배열 시계방향 이동
    case 5:
      newArr = partialRotateRight(arr);
      break;

    // 부분배열 반시계방향 이동
    case 6:
      newArr = partialRotateRight(partialRotateRight(partialRotateRight(arr)));
      break;
  }
  return newArr;
};

for (let i = 0; i < operArr.length; i++) {
  arr = operation(arr, operArr[i]);
}

let ans = "";
arr.forEach((rowInfo) => {
  ans += rowInfo.join(" ");
  ans += "\n";
});
console.log(ans);
