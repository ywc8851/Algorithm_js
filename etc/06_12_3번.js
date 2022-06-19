function solution(n, plans, clients) {
  const answer = Array.from({ length: clients.length }, () => 0);
  const curService = [];
  const table = Array.from({ length: plans.length }, () =>
    Array.from({ length: 2 }, () => [])
  );

  for (let i = 0; i < plans.length; i++) {
    const arr = plans[i].split(" ").map(Number);
    table[i][0] = arr[0];
    arr.shift();
    arr.forEach((a) => curService.push(a));
    table[i][1] = [...curService];
  }

  for (let i = 0; i < clients.length; i++) {
    const arr = clients[i].split(" ").map(Number);
    const data = arr[0];
    arr.shift();

    let flag = true;
    for (let j = 0; j < table.length; j++) {
      if (table[j][0] >= data) {
        flag = true;
        for (let k = 0; k < arr.length; k++) {
          if (table[j][1].includes(arr[k])) continue;
          else {
            flag = false;
          }
        }
        if (flag) {
          answer[i] = j + 1;
          break;
        }
      }
    }
  }
  return answer;
}

console.log(
  solution(
    5,
    ["100 1 3", "500 4", "2000 5"],
    ["300 3 5", "1500 1", "100 1 3", "50 1 2"]
  )
);
// [3,3,1,0]
