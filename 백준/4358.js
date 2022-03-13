const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const total = input.length;
let treeMap = new Map();
for (let i = 0; i < input.length; i++) {
  const treeName = input[i].trim();
  treeMap.set(treeName, (treeMap.get(treeName) || 0) + 1);
}

const treeMapSort = new Map([...treeMap.entries()].sort());
for ([key, value] of treeMapSort) {
  console.log(
    key,
    parseFloat(Math.round((value / total) * 100 * 10000) / 10000).toFixed(4)
  );
}
