function solution(line) {
  let ans = [];
  let map = new Map();
  map.set("1", [0, 0]);
  map.set("2", [0, 1]);
  map.set("3", [0, 2]);
  map.set("4", [0, 3]);
  map.set("5", [0, 4]);
  map.set("6", [0, 5]);
  map.set("7", [0, 6]);
  map.set("8", [0, 7]);
  map.set("9", [0, 8]);
  map.set("0", [0, 9]);
  map.set("Q", [1, 0]);
  map.set("W", [1, 1]);
  map.set("E", [1, 2]);
  map.set("R", [1, 3]);
  map.set("T", [1, 4]);
  map.set("Y", [1, 5]);
  map.set("U", [1, 6]);
  map.set("I", [1, 7]);
  map.set("O", [1, 8]);
  map.set("P", [1, 9]);

  let curLeft = [1, 0];
  let curRight = [1, 9];

  for (let i = 0; i < line.length; i++) {
    const curType = line[i];
    const [x, y] = map.get(curType);
    const leftMan = Math.abs(
      Math.abs(curLeft[0] - x) + Math.abs(curLeft[1] - y)
    );
    const rightMan = Math.abs(
      Math.abs(curRight[0] - x) + Math.abs(curRight[1] - y)
    );

    if (leftMan < rightMan) {
      ans.push(0);
      curLeft = [x, y];
    } else if (leftMan > rightMan) {
      ans.push(1);
      curRight = [x, y];
    } else {
      if (Math.abs(curLeft[1] - y) < Math.abs(curRight[1] - y)) {
        ans.push(0);
        curLeft = [x, y];
      } else if (Math.abs(curLeft[1] - y) > Math.abs(curRight[1] - y)) {
        ans.push(1);
        curRight = [x, y];
      } else {
        if (
          curType === "1" ||
          curType === "2" ||
          curType === "3" ||
          curType === "4" ||
          curType === "5" ||
          curType === "Q" ||
          curType === "W" ||
          curType === "E" ||
          curType === "R" ||
          curType === "T"
        ) {
          ans.push(0);
          curLeft = [x, y];
        } else {
          ans.push(1);
          curRight = [x, y];
        }
      }
    }
  }
  return ans;
}

console.log(solution("Q4OYPI")); // [0,0,1,0,1,1]
console.log(solution("RYI76")); // [0, 0, 1, 1, 0]
