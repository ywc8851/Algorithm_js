function solution(s) {
  let answer = "";
  let hash_map = new Map(); 
  // 0부터 9까지 hashing
  hash_map.set("zero", 0);
  hash_map.set("one", 1);
  hash_map.set("two", 2);
  hash_map.set("three", 3);
  hash_map.set("four", 4);
  hash_map.set("five", 5);
  hash_map.set("six", 6);
  hash_map.set("seven", 7);
  hash_map.set("eight", 8);
  hash_map.set("nine", 9);
  let res="";
  for(let i=0; i<s.length; i++) {
      if(isNaN(s[i])){ // 숫자가 아닌 경우
          res += s[i];
          if(hash_map.has(res)){ // 숫자의 알파벳이 완성된 경우
              answer+=hash_map.get(res); // get으로 value값 answer 문자열에 더하기
              res=""; // res 초기화
          }
      }
      else answer+=s[i]; // 숫자인경우 그대로 answer 문자열에 더하기
  }
  return parseInt(answer); // 문자열 int로 변환하여 출력
}
