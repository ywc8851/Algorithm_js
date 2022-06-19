const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let tc = parseInt(input[0]);
let idx = 1;

const operator = [];

while (tc--) {
  const N = parseInt(input[idx++]);
  backtracking(1, N);
  console.log();
}

function backtracking(cnt, n) {
  if (cnt === n) {
    const nums = [];
    for (let i = 0; i < n; i++) nums.push(i + 1);

    if (isZero(nums)) {
      print(nums);
    }
    return;
  }

  operator.push(" ");
  backtracking(cnt + 1, n);
  operator.pop();

  operator.push("+");
  backtracking(cnt + 1, n);
  operator.pop();

  operator.push("-");
  backtracking(cnt + 1, n);
  operator.pop();
}

function isZero(nums) {
  let acc = 0;

  for (let i = -1; i < operator.length; i++) {
    let num = nums[i + 1];
    let jump = 0;

    for (let j = i + 1; j < operator.length; j++) {
      if (operator[j] !== " ") break;
      num += nums[j + 1] + "";
      jump++;
    }

    if (i === -1) {
      acc += Number(num);
    } else if (operator[i] === "-") {
      acc -= Number(num);
    } else {
      acc += Number(num);
    }
    i += jump;
  }

  return acc === 0;
}

function print(nums) {
  let answer = `${nums[0]}`;
  for (let i = 0; i < operator.length; i++) {
    answer += `${operator[i]}${nums[i + 1]}`;
  }
  console.log(answer);
}
