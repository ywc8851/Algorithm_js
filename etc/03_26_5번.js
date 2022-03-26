function solution(abilities, k) {
  let ans = 0;
  const round = Math.ceil(abilities.length / 2);
  let roundDiff = Array.from({ length: round }, () => 0);

  abilities = abilities.sort((a, b) => b - a);
  for (let i = 0; i < abilities.length; i++) {
    if (i % 2 === 1) {
      ans += abilities[i];
    }
  }

  if (abilities.length % 2 === 0) {
    for (let i = 0; i < round; i++) {
      let diff = abilities[i * 2] - abilities[i * 2 + 1];
      roundDiff[i] = diff;
    }
  } else {
    for (let i = 0; i < round - 1; i++) {
      let diff = abilities[i * 2] - abilities[i * 2 + 1];
      roundDiff[i] = diff;
    }
    roundDiff[round - 1] = abilities[abilities.length - 1];
  }

  roundDiff.sort((a, b) => b - a);

  for (let i = 0; i < k; i++) {
    ans += roundDiff[i];
  }

  return ans;
}

console.log(solution([2, 8, 3, 6, 1, 9, 1, 9], 2)); // 21
console.log(solution([7, 6, 8, 9, 10], 1)); // 22
