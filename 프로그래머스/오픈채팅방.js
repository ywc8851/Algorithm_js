function solution(record) {
  let tmp = [];
  var answer = [];
  let hash_map = new Map();
  for (let i = 0; i < record.length; i++) {
    let arr = record[i].split(" ");
    if (arr[0] !== "Leave") hash_map.set(arr[1], arr[2]);
    if (arr[0] !== "Change") tmp.push([arr[0], arr[1]]);
  }
  for (let i = 0; i < tmp.length; i++) {
    if (tmp[i][0] == "Enter") {
      answer.push(`${hash_map.get(tmp[i][1])}님이 들어왔습니다.`);
    } else {
      answer.push(`${hash_map.get(tmp[i][1])}님이 나갔습니다.`);
    }
  }
  return answer;
}
