const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const bookNum = +input.shift();
const books = new Map();
input.forEach(i => books.set(i.trim(), (books.get(i.trim()) || 0) + 1));

const arr = [...books.entries()].sort((a, b) =>
  a[1] > b[1] ? -1 : a[1] < b[1] ? 1 : a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
);
console.log(arr[0][0]);
