function solution(purchase) {
  var answer = new Array(5).fill(0);
  let cur = 0;
  let sum = new Array(366).fill(0);
  function countday(month, day) {
    let dayOfMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let dayCnt = 0;
    for (let i = 1; i < month; i++) {
      dayCnt += dayOfMonth[i];
    }
    dayCnt += day;
    return dayCnt;
  }
  for (let i = 0; i < purchase.length; i++) {
    let arr = purchase[i].split(' ');
    let arr2 = arr[0].split('/');
    let money = +arr[1];
    let month = +arr2[1];
    let day = +arr2[2];
    let curDay = countday(month, day);
    let nextDay = countday(month, day) + 30;
    for (let i = curDay; i < nextDay; i++) {
      sum[i] += money;
    }
  }

  for (let i = 1; i < 366; i++) {
    if (sum[i] < 10000) answer[0]++;
    else if (sum[i] < 20000) answer[1]++;
    else if (sum[i] < 50000) answer[2]++;
    else if (sum[i] < 100000) answer[3]++;
    else answer[4]++;
  }
  return answer;
}

console.log(
  solution(['2019/01/01 5000', '2019/01/20 15000', '2019/02/09 90000'])
);
// [315, 9, 11, 20, 10]

console.log(
  solution([
    '2019/01/30 5000',
    '2019/04/05 10000',
    '2019/06/10 20000',
    '2019/08/15 50000',
    '2019/12/01 100000',
  ])
);
// [245, 30, 30, 30, 30]
