function solution(dice) {
  var answer = 0;

  // 마주보고있는 주사위(위,아래 pair)
  let pair = new Array(7);
  pair[1] = 6;
  pair[2] = 4;
  pair[3] = 5;
  pair[4] = 2;
  pair[5] = 3;
  pair[6] = 1;

  // 맨아래 주사위에서 윗면 고르는 경우의 수 1~6
  for (let i = 1; i <= 6; i++) {
    let sum = 0;
    let sideMax = 0;
    for (let j = 1; j <= 6; j++) {
      // 아랫면과 윗면의 숫자가 아닌 옆면중 제일 큰 수 고르기
      if (j != dice[0][i - 1] && j != dice[0][pair[i] - 1]) {
        sideMax = Math.max(sideMax, j);
      }
    }
    sum += sideMax;

    let x = dice[0][i - 1]; // 윗면의 수
    let idx = 0;

    // 2번주사위부터 탐색 시작
    for (let k = 2; k <= dice.length; k++) {
      sideMax = 0;
      // 현재 주사위의 윗면, 아랫면 찾기위한 반복문
      for (let l = 1; l <= 6; l++) {
        if (dice[k - 1][l - 1] === x) {
          idx = l;
          break;
        }
      }

      // 현재 주사위의 윗면, 아랫면
      let top = dice[k - 1][pair[idx] - 1];
      let bottom = x;

      // 현재 주사위의 옆면중 최댓값
      for (let m = 1; m <= 6; m++) {
        if (m != top && m != bottom) sideMax = Math.max(sideMax, m);
      }
      // 값 더해주고 윗면 갱신
      sum += sideMax;
      x = top;
    }
    answer = Math.max(answer, sum);
  }

  return answer;
}
