const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const tc = +input.shift();

for (let i = 0; i < tc; i++) {
  const nodeNum = +input.shift();
  const visit = new Array(nodeNum + 1).fill(false);
  const parent = new Array(nodeNum + 1).map((_, idx) => idx + 1);

  for (let j = 0; j < nodeNum - 1; j++) {
    const [parentNode, childNode] = input.shift().split(" ").map(Number);
    parent[childNode] = parentNode;
  }

  let [node1, node2] = input.shift().split(" ").map(Number);
  visit[node1] = true;

  while (node1 !== parent[node1]) {
    node1 = parent[node1];
    visit[node1] = true;
  }
  while (1) {
    if (visit[node2]) {
      console.log(node2);
      break;
    }
    node2 = parent[node2];
  }
}
