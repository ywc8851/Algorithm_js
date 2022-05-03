const changeTimeForm = (timeStr) => {
  let [hour, min] = timeStr.split(':').map(Number);
  return hour * 60 + min;
};
function solution(names, times) {
  let ans = [];
  let map = new Map();
  for (let i = 0; i < times.length; i++) {
    if (map.has(names[i])) {
      let arr = map.get(names[i]);
      map.set(names[i], [...arr, changeTimeForm(times[i])]);
    } else {
      map.set(names[i], [changeTimeForm(times[i])]);
    }
  }
  let sortMap = [...map.entries()].map((item) => [item[0], [...item[1].sort((a, b) => a - b)]]);
  sortMap.forEach(([name, timeRecord]) => {
    for (let i = 0; i < timeRecord.length - 2; i++) {
      if (timeRecord[i + 2] <= timeRecord[i] + 60) {
        ans.push(name);
        break;
      }
    }
  });
  return ans.sort();
}

// console.log(solution(['a', 'a', 'a', 'a', 'a', 'a', 'b', 'b', 'b', 'b', 'b'], ['23:27', '03:14', '12:57', '13:35', '13:18', '21:58', '22:39', '10:49', '19:37', '14:14', '10:41']));
// console.log(solution(['a', 'a', 'a', 'a', 'a', 'b', 'b', 'b', 'b', 'b', 'b'], ['04:48', '23:53', '06:36', '07:45', '12:16', '00:52', '10:59', '17:16', '00:36', '01:26', '22:42']));
