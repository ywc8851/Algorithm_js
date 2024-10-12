function solution(survey, choices) {
  const map = new Map();
  map.set("R", 0);
  map.set("T", 0);
  map.set("F", 0);
  map.set("C", 0);
  map.set("M", 0);
  map.set("J", 0);
  map.set("A", 0);
  map.set("N", 0);

  for (let i = 0; i < survey.length; i++) {
    const [option1, option2] = survey[i].split("");
    const choice = choices[i];
    if (choice === 1) map.set(option1, map.get(option1) + 3);
    else if (choice === 2) map.set(option1, map.get(option1) + 2);
    else if (choice === 3) map.set(option1, map.get(option1) + 1);
    else if (choice === 5) map.set(option2, map.get(option2) + 1);
    else if (choice === 6) map.set(option2, map.get(option2) + 2);
    else if (choice === 7) map.set(option2, map.get(option2) + 3);
  }

  let ans = "";

  if (map.get("R") >= map.get("T")) ans += "R";
  else ans += "T";
  if (map.get("C") >= map.get("F")) ans += "C";
  else ans += "F";
  if (map.get("J") >= map.get("M")) ans += "J";
  else ans += "M";
  if (map.get("A") >= map.get("N")) ans += "A";
  else ans += "N";

  return ans;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])); // TCMA
