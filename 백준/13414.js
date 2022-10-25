const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [possibleNum] = input.shift().split(" ").map(Number);
const students = input.map((i) => i.trim());
const map = new Map();

students.forEach((student) => {
  if (!map.has(student)) map.set(student, 1);
  else {
    map.delete(student);
    map.set(student, 1);
  }
});

const finalArr = [...map.keys()];

console.log(finalArr.slice(0, possibleNum).join("\n"));
