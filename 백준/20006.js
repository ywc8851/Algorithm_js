const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [, maxMember] = input.shift().split(" ").map(Number);
const arr = input
  .map((i) => i.trim().split(" "))
  .map((i) => {
    return [Number(i[0]), i[1]];
  });

const rooms = [];
const members = Array.from({ length: 300 }, () => []);
let curIdx = 0;

rooms.push([0, arr[0][0], 1]);
members[0].push(arr[0]);

for (let i = 1; i < arr.length; i++) {
  const level = arr[i][0];
  let isPossible = false;

  for (let j = 0; j < rooms.length; j++) {
    if (
      rooms[j][1] - 10 <= level &&
      level <= rooms[j][1] + 10 &&
      rooms[j][2] + 1 <= maxMember
    ) {
      rooms[j] = [j, rooms[j][1], rooms[j][2] + 1];
      members[j].push(arr[i]);
      isPossible = true;
      break;
    }
  }

  if (!isPossible) {
    curIdx += 1;
    rooms.push([curIdx, level, 1]);
    members[curIdx].push(arr[i]);
  }
}

const ans = members
  .slice(0, curIdx + 1)
  .map((subArr) => subArr.slice().sort((a, b) => (a[1] < b[1] ? -1 : 1)));

let ansString = "";

for (let i = 0; i < ans.length; i++) {
  if (ans[i].length === maxMember) ansString += "Started!\n";
  else ansString += "Waiting!\n";

  for (let j = 0; j < ans[i].length; j++) {
    ansString += ans[i][j].join(" ") + "\n";
  }
}

console.log(ansString);
