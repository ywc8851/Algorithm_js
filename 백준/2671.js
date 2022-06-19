const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const regex = /^(100+1+|01)+$/;
input[0].match(regex) ? console.log("SUBMARINE") : console.log("NOISE");
