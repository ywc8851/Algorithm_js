const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

[n, ...arr] = input;
arr = arr.map((i) => +i);

arr.forEach((i) => {
  const fibonacci = [
    [1, 0],
    [0, 1],
  ];

  for (let j = 2; j <= i; j++) {
    fibonacci[j] = [
      fibonacci[j - 1][0] + fibonacci[j - 2][0],
      fibonacci[j - 1][1] + fibonacci[j - 2][1],
    ];
  }
  console.log(fibonacci[i].join(' '));
});
