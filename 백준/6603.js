const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const getCombinations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map(el => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map(el => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

while (input.length) {
  const arr = input.shift().split(" ").map(Number);
  if (arr[0] === 0) break;

  const n = arr.slice(1);

  console.log(
    `${getCombinations(n, 6)
      .map(i => i.join(" "))
      .join("\n")}\n`
  );
}
