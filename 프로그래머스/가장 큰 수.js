function solution(numbers) {
  var answer = "";
  answer = numbers.map((number) => number.toString());
  answer.sort((a, b) => b + a - (a + b));
  if (answer.every((a) => a === "0")) {
    return "0";
  } else {
    return answer.join("");
  }
}
