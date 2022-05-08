function solution(rooms, target) {
  let ans = [];
  let impossible = new Map();
  let map = new Map();

  for (let i = 0; i < rooms.length; i++) {
    let arr = rooms[i].split("]");
    const roomNum = +arr[0].split("[")[1];
    const persons = arr[1].split(",");

    if (roomNum === target) {
      for (let j = 0; j < persons.length; j++) impossible.set(persons[j], true);
      continue;
    }

    for (let k = 0; k < persons.length; k++) {
      if (impossible.has(persons[k])) {
        continue;
      }
      let roomCnt = map.has(persons[k]) ? map.get(persons[k])[0] + 1 : 1;
      let distance = map.has(persons[k]) ? map.get(persons[k])[1] : Infinity;

      distance = Math.min(distance, Math.abs(target - roomNum));
      map.set(persons[k], [roomCnt, distance, persons[k]]);
    }
  }

  let arr = [...map.entries()]
    .filter(a => !impossible.has(a[0]))
    .map(a => {
      a.shift();
      return a[0];
    });

  arr.sort((a, b) =>
    a[0] > b[0]
      ? 1
      : a[0] < b[0]
      ? -1
      : a[1] > b[1]
      ? 1
      : a[1] < b[1]
      ? -1
      : a[2] > b[2]
      ? 1
      : a[2] < b[2]
      ? -1
      : 0
  );

  arr.map(a => ans.push(a[2]));
  return ans;
}

console.log(
  solution(["[403]James", "[404]Azad,Louis,Andy", "[101]Azad,Guard"], 403)
);
// ["Andy", "Louis", "Guard", "Azad"]

console.log(
  solution(["[101]Azad,Guard", "[202]Guard", "[303]Guard,Dzaz"], 202)
);
// ["Azad", "Dzaz"]
