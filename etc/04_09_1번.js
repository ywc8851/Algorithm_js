function solution(path) {
  let ans = [];
  let arr = [];
  let curDir = path[0];
  let dirChange = [];
  let cnt = 1;
  for (let i = 0; i < path.length - 1; i++) {
    if (path[i] !== path[i + 1]) {
      dirChange.push([path[i], path[i + 1]]);
      arr.push([curDir, cnt]);
      curDir = path[i + 1];
      cnt = 1;
    } else {
      cnt++;
    }
  }
  arr.push([curDir, cnt]);

  let dirInfo = [];
  for (let i = 0; i < dirChange.length; i++) {
    if (dirChange[i][0] === 'S' && dirChange[i][1] === 'W')
      dirInfo.push('right');
    if (dirChange[i][0] === 'S' && dirChange[i][1] === 'E')
      dirInfo.push('left');
    if (dirChange[i][0] === 'W' && dirChange[i][1] === 'N')
      dirInfo.push('right');
    if (dirChange[i][0] === 'W' && dirChange[i][1] === 'S')
      dirInfo.push('left');
    if (dirChange[i][0] === 'N' && dirChange[i][1] === 'E')
      dirInfo.push('right');
    if (dirChange[i][0] === 'N' && dirChange[i][1] === 'W')
      dirInfo.push('left');
    if (dirChange[i][0] === 'E' && dirChange[i][1] === 'S')
      dirInfo.push('right');
    if (dirChange[i][0] === 'E' && dirChange[i][1] === 'N')
      dirInfo.push('left');
  }

  let curTime = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][1] < 6) {
      ans.push(
        `Time ${curTime}: Go straight ${arr[i][1] * 100}m and turn ${
          dirInfo[i]
        }`
      );
      curTime += arr[i][1];
    } else {
      curTime += arr[i][1] - 5;
      ans.push(`Time ${curTime}: Go straight 500m and turn ${dirInfo[i]}`);
      curTime += 5;
    }
  }
  return ans;
}
console.log(solution('EEESEEEEEENNNN'));
// [
//   'Time 0: Go straight 300m and turn right',
//   'Time 3: Go straight 100m and turn left',
//   'Time 5: Go straight 500m and turn left',
// ];

console.log(solution('SSSSSSWWWNNNNNN'));
// ["Time 1: Go straight 500m and turn right","Time 6: Go straight 300m and turn right"]
