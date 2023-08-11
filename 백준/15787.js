const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const train = Array.from({ length: N }, () =>
  Array.from({ length: 20 }, () => false)
);

for (let i = 0; i < M; i++) {
  const arr = input[i].split(" ").map(Number);
  if (arr[0] === 1 || arr[0] === 2) {
    const [, trainNum, seatNum] = arr;

    train[trainNum - 1][seatNum - 1] = arr[0] === 1 ? true : false;
  } else if (arr[0] === 3 || arr[0] === 4) {
    const trainNum = arr[1];

    if (arr[0] === 3) {
      train[trainNum - 1].pop();
      train[trainNum - 1].unshift(false);
    } else if (arr[0] === 4) {
      train[trainNum - 1].shift();
      train[trainNum - 1].push(false);
    }
  }
}

const ans = new Set();

train.forEach((val) => {
  ans.add(val.join(""));
});

console.log(ans.size);
