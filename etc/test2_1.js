function solution(id_list, report, k) {
  let person = id_list.length;
  let result = new Array(person).fill(0);
  let arr = new Array(person);
  let hash_name = new Map();
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(person).fill(0);
  }
  for (let i = 0; i < id_list.length; i++) {
    hash_name.set(id_list[i], i);
  }
  for (let i = 0; i < report.length; i++) {
    let from = hash_name.get(report[i].split(" ")[0]);
    let to = hash_name.get(report[i].split(" ")[1]);
    arr[from][to] = 1;
  }
  let pause = [];
  for (let i = 0; i < id_list.length; i++) {
    let cnt = 0;
    for (let j = 0; j < id_list.length; j++) {
      if (arr[j][i] === 1) cnt++;
    }
    if (cnt >= k) {
      pause.push(i);
    }
  }
  for (let i = 0; i < id_list.length; i++) {
    for (let j = 0; j < pause.length; j++) {
      if (arr[i][pause[j]] === 1) {
        result[i]++;
      }
    }
  }
  return result;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
); // [2,1,1,0]
