// let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let input = require("fs").readFileSync("input.txt").toString().split("\n");
let n = input[0].split("")[0]; // 총 입력 받을 걸그룹의 수 N
let m = input[0].split("")[2]; // 맞혀야 할 문제의 수 M
let index = 1;
let group_member = 0;
let group_name = new Map(); // 그룹명과 그룹인원이 [key,value] 쌍으로 들어가는 해쉬 테이블
let member = new Map(); // 이름과 속해있는 그룹명이 [key,value] 쌍으로 들어가는 해쉬 테이블

for (let i = 0; i < n; i++) {
  group_name.set(input[index], input[index + 1]);
  group_member = Number(input[index + 1]); // Number로 형변환 후 그룹인원 저장

  for (let j = 0; j < group_member; j++) {
    member.set(input[index + 2 + j], input[index]); // 이름과 그룹명 해쉬 테이블에 추가
  }
  index = index + 2 + group_member; // input에서 다음 그룹까지 인덱스 증가
}

var member_sort = new Map([...member.entries()].sort()); // 사전순으로 출력하기 위해 key값(이름)기준으로 정렬

// 퀴즈 시작
for (let j = 0; j < m; j++) {
  if (Number(input[index + 1]) === 1) {
    // 해당멤버의 팀명 출력 , input[index] 에는 멤버이름
    console.log(member.get(input[index]));
    index += 2;
  } else {
    // 해당팀의 멤버 사전순으로 출력
    for (let [k, v] of member_sort) {
      if (v === input[index]) {
        console.log(k);
      }
    }
    index += 2;
  }
}
