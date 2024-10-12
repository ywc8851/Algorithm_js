function solution(today, terms, privacies) {
  const map = new Map();
  for (let i = 0; i < terms.length; i++) {
    const [type, month] = terms[i].split(" ");
    map.set(type, +month);
  }

  function calcDate(dateString) {
    const [year, month, day] = dateString.split(".").map(Number);

    return (year - 2000) * 12 * 28 + month * 28 + day;
  }

  const parseToday = calcDate(today);

  let ans = [];

  for (let i = 0; i < privacies.length; i++) {
    const [date, type] = privacies[i].split(" ");
    const parseCurrent = calcDate(date);
    const expire = map.get(type);

    if (parseToday >= parseCurrent + expire * 28) {
      ans.push(i + 1);
    }
  }

  return ans;
}

console.log(
  solution(
    "2020.01.01",
    ["Z 3", "D 5"],
    [
      "2019.01.01 D",
      "2019.11.15 Z",
      "2019.08.02 D",
      "2019.07.01 D",
      "2018.12.28 Z",
    ]
  )
);
// [1, 4, 5]
