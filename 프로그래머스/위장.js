function solution(clothes) {
  let ans = 1;
  let hash_map = new Map();
  for (let i = 0; i < clothes.length; i++) {
    let kind = clothes[i][1];
    let name = clothes[i][0];
    hash_map.set(kind, (hash_map.get(kind) || 0) + 1);
  }
  for (let [k, v] of hash_map) {
    ans *= (v + 1);
  }
  return ans - 1;
}
