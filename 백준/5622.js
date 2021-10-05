let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
//let input = require("fs").readFileSync("input.txt").toString().split("\n");
let ans = 0;

let str = input[0];
// 알파벳과 누르는데 걸리는 시간 hash table에 입력
let hash_map = new Map();
hash_map.set("A", 3);
hash_map.set("B", 3);
hash_map.set("C", 3);
hash_map.set("D", 4);
hash_map.set("E", 4);
hash_map.set("F", 4);
hash_map.set("G", 5);
hash_map.set("H", 5);
hash_map.set("I", 5);
hash_map.set("J", 6);
hash_map.set("K", 6);
hash_map.set("L", 6);
hash_map.set("M", 7);
hash_map.set("N", 7);
hash_map.set("O", 7);
hash_map.set("P", 8);
hash_map.set("Q", 8);
hash_map.set("R", 8);
hash_map.set("S", 8);
hash_map.set("T", 9);
hash_map.set("U", 9);
hash_map.set("V", 9);
hash_map.set("W", 10);
hash_map.set("X", 10);
hash_map.set("Y", 10);
hash_map.set("Z", 10);
// 입력받은 문자열을 순회하며 누르는데 걸리는 시간 hash table에 찾아서 ans에 더해줌
for (let i = 0; i < str.length; i++) {
  ans += hash_map.get(str[i]);
}
console.log(ans);
