function solution(money, costs) {
  const moneyforOne = Array.from({ length: 6 }, () => 0);
  const arr = [1, 5, 10, 50, 100, 500];
  for (let i = 0; i < costs.length; i++) {
    moneyforOne[i] = [costs[i] / arr[i], i];
  }
  moneyforOne.sort((a, b) => a[0] - b[0]);
  let ans = 0;
  while (money !== 0) {
    let cur = moneyforOne.shift();
    let curMoney = arr[cur[1]];
    let quota = Math.floor(money / curMoney);
    money -= quota * curMoney;
    ans += quota * costs[cur[1]];
  }
  return ans;
}
// 1원, 5원, 10원, 50원, 100원, 500원
console.log(solution(4578, [1, 4, 99, 35, 50, 1000])); // 2308
console.log(solution(1999, [2, 11, 20, 100, 200, 600])); // 2798
