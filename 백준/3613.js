const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const str = input[0].trim();

function solution() {
  const error = "Error!";
  let isJava = true;
  if (str.includes("_")) isJava = false;

  if (
    str.length === 0 ||
    str[0] == "_" ||
    str[str.length - 1] == "_" ||
    /[A-Z]/.test(str[0]) ||
    str.includes(" ")
  ) {
    return error;
  }

  const ans = [];

  if (isJava) {
    for (let i = 0; i < str.length; i++) {
      if (/[A-Z]/.test(str[i])) ans.push(`_${str[i].toLowerCase()}`);
      else ans.push(str[i]);
    }
  } else {
    for (let i = 0; i < str.length; i++) {
      if (/[A-Z]/.test(str[i])) return error;
      else if (str[i] === "_") {
        if (/[A-Z]/.test(str[i + 1]) || str[i + 1] == "_") return error;

        ans.push(str[i + 1].toUpperCase());
        i++;
      } else {
        ans.push(str[i]);
      }
    }
  }
  return ans.join("");
}
console.log(solution());
