function solution = (k, room_number) => {
  const answer = [];
  const map = new Map();
  const find = (number) => {
    if (!map.get(number)) {
      map.set(number, number + 1);

      return number;
    }
    const newNumber = find(map.get(number));
    map.set(number, newNumber + 1);
    return newNumber;
  };

  for (let i = 0; i < room_number.length; i++) {
    const number = find(room_number[i]);
    answer.push(number);
  }

  return answer;
};
