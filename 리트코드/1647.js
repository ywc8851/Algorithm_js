function solution(s) {
  let ans = 0;
  let frequence = new Array(26).fill(0);
  let arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    frequence[arr[i].charCodeAt() - 97]++;
  }
  frequence.sort((a, b) => b - a);
  let max = frequence[0];
  for (let i = 0; i < 26; i++) {
    if (frequence[i] === 0) break;
    if (frequence[i] > max) {
      ans += frequence[i] - max;
    } else {
      max = frequence[i];
    }
    if (max > 0) max--;
  }
  return ans;
}
console.log(solution("aaabbccdde"));
