const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const str = input.shift().trim();
const alphabet = new Array(26).fill(0);
for (let i = 0; i < str.length; i++) {
  alphabet[str.charCodeAt(i) - 65]++;
}
let ans = "";
let cnt = 0;
for (i = 0; i < 26; i++) {
  if (alphabet[i] % 2) cnt++;
}
if (cnt > 1) {
  ans = "I'm sorry Hansoo";
} else {
  let mid = "";
  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < Math.floor(alphabet[i] / 2); j++) {
      if (alphabet[i] % 2 === 1) mid = String.fromCharCode(i + 65);
      ans += String.fromCharCode(i + 65);
    }
  }
  let ansplus = ans.split("").reverse().join("");
  ans += mid;
  ans += ansplus;
}

console.log(ans);
