function solution(places) {
  let answer = [];
  for (const tc of places) {
    let flag = true;
    let arr = new Array(5);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = [];
    }
    for (let i = 0; i < tc.length; i++) {
      arr[i] = tc[i].split("");
    }
    let dx = [0, 0, 1, -1];
    let dy = [1, -1, 0, 0];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        // 거리두기 위반 case 1 : P가 붙어있는 경우
        if (arr[i][j] === "P") {
          for (let k = 0; k < 4; k++) {
            if (
              i + dx[k] >= 0 &&
              i + dx[k] < 5 &&
              j + dy[k] >= 0 &&
              j + dy[k] < 5 &&
              arr[i + dx[k]][j + dy[k]] === "P"
            ) {
              flag = false;
            }
          }
        }
        // 거리두기 위반 case 2 : 빈테이블(O)주변(4방향)에 사람이 두명이상 존재
        if (arr[i][j] === "O") {
          let count = 0;
          for (let k = 0; k < 4; k++) {
            if (
              i + dx[k] >= 0 &&
              i + dx[k] < 5 &&
              j + dy[k] >= 0 &&
              j + dy[k] < 5 &&
              arr[i + dx[k]][j + dy[k]] === "P"
            ) {
              count++;
            }
            if (count > 1) {
              flag = false;
            }
          }
        }
      }
    }
    if (flag) {
      answer.push(1);
    } else {
      answer.push(0);
    }
  }
  return answer;
}
