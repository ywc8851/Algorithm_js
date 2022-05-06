const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (left <= right) {
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;

    mid = Math.floor((left + right) / 2);
  }
  return mid + 1;
};

function solution(info, query) {
  let ans = [];
  const infos = {};
  info.forEach(i => {
    const arr = i.split(" ");
    const score = +arr.pop();
    const key = arr.join("");

    if (infos[key]) infos[key].push(score);
    else infos[key] = [score];
  });

  for (const key in infos) {
    infos[key].sort((a, b) => a - b);
  }

  const countPerson = (infos, query, score) => {
    const infosKey = Object.keys(infos);
    return infosKey
      .filter(key => query.every(v => key.includes(v)))
      .reduce(
        (acc, key) => acc + infos[key].length - binarySearch(infos[key], score),
        0
      );
  };

  query
    .map(q => q.split(/ and | |-/i))
    .filter(e => e !== "")
    .forEach(q => {
      const score = q.pop();
      const result = countPerson(infos, q, score);
      ans.push(result);
    });

  return ans;
}
