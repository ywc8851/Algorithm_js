var restoreIpAddresses = function (s) {
  let answer = [];
  function DFS(L, arr, s) {
    if (L === 4) {
      if (s === "") answer.push(arr.join("."));
      return;
    }
    for (let i = 1; i <= 3; i++) {
      if (i > s.length || +s.substr(0, i) > 255) break;
      if (i > 1 && s[0] === "0") break;
      arr.push(s.substr(0, i));
      s = s.substr(i);
      DFS(L + 1, arr, s);
      s = arr.pop() + s;
    }
  }
  DFS(0, [], s);
  return answer;
};
