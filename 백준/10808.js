const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const ans = Array.from({ length: 26 }, () => 0);

input[0].split("").map((alpha) => {
  ans[alpha.charCodeAt(0) - 97] += 1;
});
console.log(ans.join(" "));
