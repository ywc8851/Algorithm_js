function solution(n, t, m, timetable) {
  let bus = new Array(n);
  for (let i = 0; i < n; i++) {
    bus[i] = 540 + t * i;
  }
  const getTime = (x) => x.split(":")[0] * 60 + x.split(":")[1] * 1;
  const getOriginal = (x) => {
    const hour = Math.floor(x / 60);
    const min = x % 60;
    return (
      (hour < 10 ? "0" + hour : hour + "") +
      ":" +
      (min < 10 ? "0" + min : min + "")
    );
  };
  let people = timetable
    .map(getTime)
    .sort((a, b) => a - b)
    .filter((x) => x <= bus[n - 1]);
  let answer = getOriginal(bus[n - 1]);

  for (let i = 0; i < n; i++) {
    const possiblePeople = people.filter((x) => x <= bus[i]).length;
    if (i === n - 1) {
      if (possiblePeople >= m) answer = getOriginal(people[m - 1] - 1);
    } else {
      people.splice(0, possiblePeople > m ? m : possiblePeople);
    }
  }
  return answer;
}
