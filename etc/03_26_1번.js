function solution(logs) {
  let ans = 0;
  let regExp = /^[a-zA-z]+$/;

  for (let i = 0; i < logs.length; i++) {
    let blankCount = logs[i].split(' ').length - 1;
    let words = logs[i].split(' ');
    // console.log(words, words.length, logs[i].length, blankCount);
    if (words.length !== 12 || logs[i].length > 100 || blankCount !== 11) {
      ans++;
      continue;
    }

    if (
      words[0] !== 'team_name' ||
      words[3] !== 'application_name' ||
      words[6] !== 'error_level' ||
      words[9] !== 'message'
    ) {
      ans++;
      continue;
    }

    if (
      !regExp.test(words[2]) ||
      !regExp.test(words[5]) ||
      !regExp.test(words[8]) ||
      !regExp.test(words[11])
    ) {
      ans++;
      continue;
    }
  }
  return ans;
}

console.log(
  solution([
    'team_name : db application_name : dbtest error_level : info message : test',
    'team_name : test application_name : I DONT CARE error_level : error message : x',
    'team_name : ThisIsJustForTest application_name : TestAndTestAndTestAndTest error_level : test message : IAlwaysTestingAndIWillTestForever',
    'team_name : oberervability application_name : LogViewer error_level : error',
  ])
); // 3 (1번째만 형식에 맞는 로그임)

console.log(
  solution([
    'team_name : MyTeam application_name : YourApp error_level : info messag : IndexOutOfRange',
    'no such file or directory',
    'team_name : recommend application_name : recommend error_level : info message : RecommendSucces11',
    'team_name : recommend application_name : recommend error_level : info message : Success!',
    '   team_name : db application_name : dbtest error_level : info message : test',
    'team_name     : db application_name : dbtest error_level : info message : test',
    'team_name : TeamTest application_name : TestApplication error_level : info message : ThereIsNoError',
  ])
); // 6 ()
