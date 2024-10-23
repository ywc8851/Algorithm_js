"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'formingMagicSquare' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter.
 */
function getPermutation(arr) {
  if (arr.length === 1) return [arr];

  const result = [];

  arr.forEach((element, idx, original) => {
    const rest = [...original.slice(0, idx), ...original.slice(idx + 1)];
    const next = getPermutation(rest);
    const attached = next.map((perm) => [element, ...perm]);

    result.push(...attached);
  });

  return result;
}

function isMagicSquare(arr) {
  for (let i = 0; i < 3; i++) {
    if (arr[i][0] + arr[i][1] + arr[i][2] !== 15) return false;
  }

  for (let i = 0; i < 3; i++) {
    if (arr[0][i] + arr[1][i] + arr[2][i] !== 15) return false;
  }

  if (arr[0][0] + arr[1][1] + arr[2][2] !== 15) return false;
  if (arr[0][2] + arr[1][1] + arr[2][0] !== 15) return false;

  return true;
}

function findMagicSquare() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const allPermutaions = getPermutation(numbers);
  const magicSquares = [];

  for (const perm of allPermutaions) {
    const square = [
      [perm[0], perm[1], perm[2]],
      [perm[3], perm[4], perm[5]],
      [perm[6], perm[7], perm[8]],
    ];

    if (isMagicSquare(square)) magicSquares.push(square);
  }

  return magicSquares;
}

function formingMagicSquare(s) {
  const magicSquares = findMagicSquare();
  let ans = Infinity;

  for (const array of magicSquares) {
    let diff = 0;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (array[i][j] !== s[i][j]) diff += Math.abs(array[i][j] - s[i][j]);
      }
    }

    ans = Math.min(ans, diff);
  }

  return ans;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  let s = Array(3);

  for (let i = 0; i < 3; i++) {
    s[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((sTemp) => parseInt(sTemp, 10));
  }

  const result = formingMagicSquare(s);

  ws.write(result + "\n");

  ws.end();
}
