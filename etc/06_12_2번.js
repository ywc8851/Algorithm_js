function solution(periods, payments, estimates) {
  let answer = Array.from({ length: 2 }, () => 0);

  for (let i = 0; i < payments.length; i++) {
    let period;
    if (periods[i] < 24) period = 1;
    else if (periods[i] >= 60) period = 3;
    else period = 2;

    let nextPeriod;
    if (periods[i] + 1 < 24) nextPeriod = 1;
    else if (periods[i] + 1 >= 60) nextPeriod = 3;
    else nextPeriod = 2;

    let arr = payments[i];
    let curSum = arr.reduce((a, b) => a + b);
    arr[0] = estimates[i];
    let nextSum = arr.reduce((a, b) => a + b);

    // vip 아닌 경우에서 되는 경우
    if (period === 1 && nextPeriod === 2 && nextSum >= 900000) {
      answer[0]++;
    }
    if (
      period === 2 &&
      nextPeriod === 2 &&
      curSum < 900000 &&
      nextSum >= 900000
    ) {
      answer[0]++;
    }
    if (
      period === 2 &&
      nextPeriod === 3 &&
      curSum < 900000 &&
      nextSum >= 600000
    ) {
      answer[0]++;
    }
    if (
      period === 3 &&
      nextPeriod === 3 &&
      curSum < 600000 &&
      nextSum >= 600000
    ) {
      answer[0]++;
    }
    // vip인 경우에서 vip가 안되는 경우
    if (
      period === 2 &&
      nextPeriod === 2 &&
      curSum >= 900000 &&
      nextSum < 900000
    ) {
      answer[1]++;
    }

    if (
      period === 2 &&
      nextPeriod === 3 &&
      curSum >= 900000 &&
      nextSum < 600000
    ) {
      answer[1]++;
    }

    if (period === 3 && curSum >= 600000 && nextSum < 600000) {
      answer[1]++;
    }
  }
  return answer;
}
