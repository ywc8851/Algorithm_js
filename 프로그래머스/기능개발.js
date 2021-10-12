function solution(progresses, speeds) {
  var answer = [];
  let stack = [];
  let cnt = 0;
  for (let i = 0; i < progresses.length; i++) {
    stack[progresses.length - 1 - i] = Math.ceil(
      (100 - progresses[i]) / speeds[i]
    );
  }
  while (stack.length > 0) {
    let num = stack.pop();
    cnt++;
    while (num >= stack[stack.length - 1] && stack.length > 0) {
      stack.pop();
      cnt++;
    }
    answer.push(cnt);
    cnt = 0;
  }
  return answer;
}
