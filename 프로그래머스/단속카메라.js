function solution(routes) {
  var answer = 0;
  routes.sort((a, b) => a[1] - b[1]);
  let last_camera = routes[0][1];
  answer++;
  for (let i = 1; i < routes.length; i++) {
    // 카메라 추가 필요없음
    if (routes[i][0] <= last_camera) continue;
    // 카메라 추가 필요
    else {
      last_camera = routes[i][1];
      answer++;
    }
  }
  return answer;
}
