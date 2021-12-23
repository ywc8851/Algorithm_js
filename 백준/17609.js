function isPalindrome(s, left, right, canDelete) {
  while (left < right) {
    if (s[left] != s[right]) {
      if (canDelete) {
        if (
          isPalindrome(s, left + 1, right, false) == 0 ||
          isPalindrome(s, left, right - 1, false) == 0
        )
          return 1;
      }
      return 2;
    }
    left++;
    right--;
  }
  return 0;
}

function solution(s) {
  var answer = [];
  for (let i = 0; i < s.length; i++) {
    answer.push(isPalindrome(s[i], 0, s[i].length - 1, true));
  }
  return answer;
}

console.log(
  solution([
    "abba",
    "summuus",
    "xabba",
    "xabbay",
    "comcom",
    "comwwmoc",
    "comwwtmoc",
  ])
); // [0, 1, 1, 2, 2, 0, 1]
