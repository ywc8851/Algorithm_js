const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();
const pattern = input.shift().trim();
const arr = input.map((i) => i.trim());
const [a, b] = pattern.split("*");
const ans = [];

arr.forEach((v) => {
  const front = v.substring(0, a.length);
  const back = v.substring(v.length - b.length);

  if (v.length < a.length + b.length) ans.push("NE");
  else if (a === front && b === back) ans.push("DA");
  else ans.push("NE");
});

console.log(ans.join("\n"));
