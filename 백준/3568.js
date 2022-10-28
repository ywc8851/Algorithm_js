const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [variableType, ...arr] = input[0].split(" ");

arr = arr.map((v) => v.replace(",", ""));
arr[arr.length - 1] = arr[arr.length - 1].replace(";", "");

const alphabetRegex = /[a-zA-Z]/;
const variableName = [];
for (let i = 0; i < arr.length; i++) {
  const tmp = [];
  arr[i].split("").map((char) => {
    if (char.match(alphabetRegex)) {
      tmp.push(char);
      arr[i] = arr[i].replace(char, "");
    }
  });

  variableName.push(tmp.join(""));

  arr[i] = arr[i].split("").reverse().join("").replace(/\]\[/g, "[]");
}

const ans = [];
for (let i = 0; i < arr.length; i++) {
  ans.push(`${variableType}${arr[i]} ${variableName[i]};`);
}

console.log(ans.join("\n"));
