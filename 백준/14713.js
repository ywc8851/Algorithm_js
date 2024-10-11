const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const birdNum = +input.shift();
const arr = input.map((i) => i.trim());
const listening = arr[arr.length - 1].split(" ");
const sentence = arr.slice(0, -1).map((i) => i.split(" "));
let ans = "Possible";

for (let i = 0; i < listening.length; i++) {
  const curWord = listening[i];
  let find = false;

  for (let j = 0; j < birdNum; j++) {
    if (sentence[j][0] === curWord) {
      find = true;
      sentence[j].shift();
      break;
    }
  }

  if (find) continue;
  else {
    ans = "Impossible";
    break;
  }
}

for (let i = 0; i < sentence.length; i++) {
  if (sentence[i].length !== 0) {
    ans = "Impossible";
    break;
  }
}

console.log(ans);
