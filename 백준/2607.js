const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();
const firstStr = input[0];
const validationStr = input.slice(1);

const solution = (standard, validation) => {
  let answer = 0;

  validation.forEach((v) => {
    const start = [...standard];

    if (v.length < start.length) {
      for (let i = 0; i < v.length; i++) {
        if (start.includes(v[i])) {
          const idx = start.indexOf(v[i]);
          start.splice(idx, 1);
        }
      }
      if (start.length === 1) {
        answer++;
      }
    } else {
      for (let i = 0; i < start.length; i++) {
        if (v.includes(start[i])) {
          const idx = v.indexOf(start[i]);
          v.splice(idx, 1);
        }
      }
      if (v.length === 1 || v.length === 0) {
        answer++;
      }
    }
  });

  return answer;
};

console.log(
  solution(
    firstStr.split(""),
    validationStr.map((v) => v.split(""))
  )
);
