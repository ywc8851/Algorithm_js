function solution(s) {
  var answer = [];
  s = s.slice(2, s.length - 2);
  let str = s.split("},{");
  str.sort((a, b) => a.length - b.length);
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].split(",");
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str[i].length; j++) {
      if (!answer.includes(Number(str[i][j])) && str[i][j] !== ",") {
        answer.push(Number(str[i][j]));
      }
    }
  }
  return answer;
}
