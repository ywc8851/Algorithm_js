function solution(str1, str2) {
  var answer = 0;
  let arr1 = new Array();
  let arr2 = new Array();
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  for (let i = 0; i < str1.length - 1; i++) {
    if (
      str1.charCodeAt(i) >= 97 &&
      str1.charCodeAt(i) <= 122 &&
      str1.charCodeAt(i + 1) >= 97 &&
      str1.charCodeAt(i + 1) <= 122
    ) {
      let tmp = "";
      tmp += str1[i];
      tmp += str1[i + 1];
      arr1.push(tmp);
    } else {
      continue;
    }
  }
  for (let i = 0; i < str2.length - 1; i++) {
    if (
      str2.charCodeAt(i) >= 97 &&
      str2.charCodeAt(i) <= 122 &&
      str2.charCodeAt(i + 1) >= 97 &&
      str2.charCodeAt(i + 1) <= 122
    ) {
      let tmp = "";
      tmp += str2[i];
      tmp += str2[i + 1];
      arr2.push(tmp);
    } else {
      continue;
    }
  }
  console.log(arr1, arr2);
  let both_arr = [];
  let plus_arr = [];
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) >= 0) {
      both_arr.push(arr1.splice(arr1.indexOf(arr2[i]), 1));
    }
    plus_arr.push(arr2[i]);
  }
  for (let i = 0; i < arr1.length; i++) {
    plus_arr.push(arr1[i]);
  }

  if (both_arr.length === 0 && plus_arr.length === 0) {
    return 65536;
  }
  return parseInt(65536 * (both_arr.length / plus_arr.length));
}
