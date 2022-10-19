function solution(begin, target, words) {
  var answer = 0;
  const queue = [[begin, 0]];
  const visited = [];

  while (queue.length) {
    const [cur, cnt] = queue.shift();

    if (cur === target) return cnt;

    words.forEach((word) => {
      let diffCnt = 0;
      if (visited.includes(word)) return;

      for (let i = 0; i < word.length; i++) {
        if (word[i] !== cur[i]) diffCnt++;
      }

      if (diffCnt === 1) {
        queue.push([word, cnt + 1]);
        visited.push(word);
      }
    });
  }
  return answer;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
// 4
