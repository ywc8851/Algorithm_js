const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [A, B, C] = input.shift().split(" ").map(Number);
const visited = Array.from({ length: 201 }, () =>
  Array.from({ length: 201 }, () => Array.from({ length: 201 }, () => false))
);
const queue = [];
queue.push([0, 0, C]);

const ans = [];
while (queue.length !== 0) {
  const [a, b, c] = queue.shift();
  if (visited[a][b][c]) continue;
  visited[a][b][c] = true;

  if (a === 0) ans.push(c);

  // A물통에서 B물통으로 줄 때
  if (a + b > B) queue.push([a + b - B, B, c]);
  else queue.push([0, a + b, c]);

  // A물통에서 C물통으로 줄 때
  if (a + c > C) queue.push([a + c - C, b, C]);
  else queue.push([0, b, a + c]);

  // B물통에서 A물통으로 줄 때
  if (b + a > A) queue.push([A, b + a - A, c]);
  else queue.push([b + a, 0, c]);

  // B물통에서 C물통으로 줄 때
  if (b + c > C) queue.push([a, b + c - C, C]);
  else queue.push([a, 0, b + c]);

  // C물통에서 A물통으로 줄 때
  if (c + a > A) queue.push([A, b, c + a - A]);
  else queue.push([c + a, b, 0]);

  // C물통에서 B물통으로 줄 때
  if (c + b > B) queue.push([a, B, c + b - B]);
  else queue.push([a, b + c, 0]);
}

console.log(ans.sort((a, b) => a - b).join(" "));
