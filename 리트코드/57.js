/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let ans = [];

  for (let i = 0; i < intervals.length; i++) {
    const [start, end] = intervals[i];

    if (newInterval[1] < start) {
      ans.push(newInterval);
      return ans.concat(intervals.slice(i));
    } else if (newInterval[0] > end) ans.push(intervals[i]);
    else {
      newInterval = [
        Math.min(start, newInterval[0]),
        Math.max(end, newInterval[1]),
      ];
    }
  }

  ans.push(newInterval);
  return ans;
};

console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
);
