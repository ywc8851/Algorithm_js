const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let sugar = Number(input[0]);

let big = 5;
let small = 3;

let big_cnt = parseInt(sugar / big); // 5kg짜리 봉지에 일단 다 담음

while (big_cnt >= 0) {
  // 하나씩 빼주면서 3kg를 이용해서 처음으로 N kg 담을때 까지  반복
  let tmp = sugar - big_cnt * big;
  if (tmp % small === 0) {
    console.log(big_cnt + tmp / small);
    return;
  } else {
    big_cnt--;
  }
}
console.log(-1);
