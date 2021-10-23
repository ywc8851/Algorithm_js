function solution(arr) {
  const myMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (myMap.has(arr[i])) myMap.set(arr[i], myMap.get(arr[i]) + 1);
    else myMap.set(arr[i], (myMap.get(arr[i]) || 0) + 1);
  }
  // // value값 기준 내림차순 정렬, 같으면 대문자앞으로
  const mapSort2 = new Map(
    [...myMap.entries()].sort((a, b) =>
      a[1] !== b[1] ? b[1] - a[1] : a[0].charCodeAt(0) - b[0].charCodeAt(0)
    )
  );
  console.log(mapSort2);
  let answer = "";
  for (let [k, v] of mapSort2) {
    // console.log(k.repeat(v));
    answer += k.repeat(v);
  }
  return answer;
}

console.log(solution("aaAAcccbbbBB"));
