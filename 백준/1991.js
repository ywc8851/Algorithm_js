const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
const tree = {};
input.forEach((i) => {
  const [parent, leftChild, rightChild] = i.trim().split(' ');
  tree[parent] = [leftChild, rightChild];
});

let ans = '';

const preOrder = (node) => {
  if (node === '.') return;
  const [left, right] = tree[node];
  ans += node;
  preOrder(left);
  preOrder(right);
};

const inOrder = (node) => {
  if (node === '.') return;
  const [left, right] = tree[node];
  inOrder(left);
  ans += node;
  inOrder(right);
};

const postOrder = (node) => {
  if (node === '.') return;
  const [left, right] = tree[node];
  postOrder(left);
  postOrder(right);
  ans += node;
};

preOrder('A');
ans += '\n';
inOrder('A');
ans += '\n';
postOrder('A');

console.log(ans);
