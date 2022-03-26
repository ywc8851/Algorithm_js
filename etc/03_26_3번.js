function solution(num_teams, remote_tasks, office_tasks, employees) {
  let set = new Set();
  let isCompany = Array.from({ length: num_teams }, () => false);
  let isCompanyMember = Array.from({ length: num_teams }, () => []);

  for (let i = 0; i < employees.length; i++) {
    let arr = employees[i].split(' ');
    let teamNum = +arr[0];
    isCompanyMember[teamNum - 1].push(i + 1);
    let flag = true;
    for (let j = 0; j < arr.length - 1; j++) {
      if (office_tasks.includes(arr[j + 1])) {
        isCompany[teamNum - 1] = true;
        flag = false;
        break;
      }
    }
    if (flag) {
      set.add(i + 1);
    }
  }

  for (let i = 0; i < num_teams; i++) {
    if (!isCompany[i]) {
      set.delete(isCompanyMember[i][0]);
    }
  }

  return Array.from(set);
}

console.log(
  solution(
    3,
    ['development', 'marketing', 'hometask'],
    ['recruitment', 'education', 'officetask'],
    [
      '1 development hometask',
      '1 recruitment marketing',
      '2 hometask',
      '2 development marketing hometask',
      '3 marketing',
      '3 officetask',
      '3 development',
    ]
  )
); // [1,4,5,7]

// console.log(
//   solution(
//     2,
//     ['design'],
//     ['building', 'supervise'],
//     ['2 design', '1 supervise building design', '1 design', '2 design']
//   )
// ); // [3,4]
