/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  let sortPoints = points.sort((a, b) => a[1] - b[1]);
  let cur = sortPoints[0][1];
  let cnt = 1;
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] <= cur) {
      continue;
    } else {
      cnt++;
      cur = points[i][1];
    }
  }
  return cnt;
};
