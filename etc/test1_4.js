function solution(s) {
  var answer=0;
  let cnt=0;
  function BFS(){
    let queue=[];
    let hashSet=new Set();
    // 1.먼저 string값을 넣어준다.
    queue.push(s);
    hashSet.add(s);
    while(queue.length){
      if(cnt>0) return cnt;
      // queue.length 만큼 돈다.
      let queuelen=queue.length;
      // 큐에 저장했던 것을 뺀다.
      for(let i=0;i<queuelen;i++){
        let x=queue.shift();
        // 큐의 크기만큼 반복한다 -> 레벨 체크
        for(let j=0;j<x.length;j++){
          let substring=x.substring(0,j)+x.substring(j+1,x.length);
          if(!hashSet.has(substring) && substring!==""){
            // 이미 탐색한 substring이 아니고, 빈문자가 아닐 때,
            if(isRight(substring)) cnt++;
            queue.push(substring);
            hashSet.add(substring);
          }
        }
      }
    }
    return 0;
  }
  answer=BFS();
  return answer;
}

// 스택인지 확인하는 function
function isRight(s){
  let stack=[];
  for(let x of s){
    if(x==='(') stack.push(x);
    else{
      if(stack.length===0) return false;
      stack.pop();
      }
  }
  if(stack.length>0) return false;
  return true;
}

console.log(solution("((()))"));
