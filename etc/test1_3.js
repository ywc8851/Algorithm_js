function solution(s) {
  let stack = [];

  for (const x of s) {
    let string = "";
    if (x !== ")") stack.push(x);
    else {
      while (stack[stack.length - 1] !== "(") {
        let tmp = stack.pop();
        string = tmp + string;
      }
      stack.pop();
      let num = "";
      while (!isNaN(stack[stack.length - 1])) {
        const numTmp = stack.pop();
        num = numTmp + num;
      }
      stack.push(string.repeat(Number(num)));
    }
  }
  return stack.join("");
}
