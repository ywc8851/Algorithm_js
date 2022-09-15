const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let tc = +input.shift();
const binarySearch = (arr, L, R, elem) => {
  let result = L,
    mid;
  while (L <= R) {
    mid = Math.floor((L + R) / 2);
    if (arr[mid] < elem) {
      result = mid + 1;
      L = mid + 1;
    } else {
      R = mid - 1;
    }
  }
  return result;
};

while (tc--) {
  const [, M] = input.shift().split(" ").map(Number);
  const A = input.shift().split(" ").map(Number);
  const B = input.shift().split(" ").map(Number);
  B.sort((a, b) => a - b);
  console.log(
    A.reduce((sum, elem) => {
      const result = binarySearch(B, 0, M - 1, elem);
      return sum + result;
    }, 0)
  );
}
