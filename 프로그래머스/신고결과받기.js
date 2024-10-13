function solution(id_list, report, k) {
  const user = new Map();
  const count = new Map();

  for (const name of id_list) {
    user.set(name, []);
    count.set(name, 0);
  }

  for (let i = 0; i < report.length; i++) {
    const [name1, name2] = report[i].split(" ");

    if (user.get(name1).includes(name2)) continue;

    user.set(name1, [...(user.get(name1) || []), name2]);
    count.set(name2, (count.get(name2) || 0) + 1);
  }

  let ans = [];

  for (const name of id_list) {
    const arr = user.get(name);
    let cnt = 0;

    for (let i = 0; i < arr.length; i++) {
      if (count.get(arr[i]) >= k) cnt++;
    }

    ans.push(cnt);
  }

  return ans;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);
// [2, 1, 1, 0]
