/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
  const sortTasks = tasks.sort((a, b) => a - b);
  let cur = sortTasks[0];
  let cnt = 1;
  let ans = 0;

  for (let i = 1; i < tasks.length; i++) {
    if (cur === sortTasks[i]) cnt++;
    else {
      if (cnt === 1) return -1;

      ans += Math.ceil(cnt / 3);
      cnt = 1;
      cur = sortTasks[i];
    }
  }

  if (cnt === 1) return -1;
  ans += Math.ceil(cnt / 3);
  return ans;
};
