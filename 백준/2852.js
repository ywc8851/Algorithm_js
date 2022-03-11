const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const goals = +input.shift();
const records = input.map((i) => i.trim().split(' '));
const teamScore = Array.from({ length: 2 }, () => 0);
const ans = Array.from({ length: 2 }, () => 0);
let curWinning = 2;
let pastTime = 0;

for (let i = 0; i < records.length; i++) {
  const teamNum = +records[i][0] - 1;
  const time = records[i][1].split(':').map(Number);
  const curTime = time[0] * 60 + time[1];
  teamScore[teamNum]++;

  if (curWinning === 1) {
    ans[1] += curTime - pastTime;
  } else if (curWinning === 0) {
    ans[0] += curTime - pastTime;
  }

  if (teamScore[0] > teamScore[1]) {
    curWinning = 0;
  } else if (teamScore[0] < teamScore[1]) {
    curWinning = 1;
  } else {
    curWinning = 2;
  }
  pastTime = curTime;
}

if (curWinning === 1) {
  ans[1] += 2880 - pastTime;
} else if (curWinning === 0) {
  ans[0] += 2880 - pastTime;
}

for (let i = 0; i < 2; i++) {
  let a = ans[i];
  let [min, sec] = [parseInt(ans[i] / 60), ans[i] % 60];
  if (min < 10) min = '0' + min;
  if (sec < 10) sec = '0' + sec;
  console.log(`${min}:${sec}`);
}
