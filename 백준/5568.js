const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [, k, ...arr] = input.map((i) => +i);

const getPermutations = (arr, num) => {
  const result = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, num - 1);
    const attached = permutations.map((v) => [fixed, ...v]);
    result.push(...attached);
  });

  return result;
};

const permutationArr = getPermutations(arr, k);
const ans = new Set();

for (let i = 0; i < permutationArr.length; i++) {
  const curNum = permutationArr[i].join("");
  if (ans.has(curNum)) continue;
  else ans.add(curNum);
}

console.log(ans.size);
