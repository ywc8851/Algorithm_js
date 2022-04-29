function solution(sentence, keyword, skips) {
  let curIndex = 0;
  let keyIndex = 0;
  let arr = sentence.split('');
  for (let i = 0; i < skips.length; i++) {
    let addChar = keyword[keyIndex % keyword.length];
    let space = skips[i];

    if (curIndex + space < arr.length + 1) {
      if (arr.slice(curIndex, curIndex + space).includes(addChar)) {
        arr.splice(arr.indexOf(addChar, curIndex), 0, addChar);
        curIndex = arr.indexOf(addChar, curIndex) + 2;
      } else {
        arr.splice(curIndex + space, 0, addChar);
        curIndex = curIndex + space + 1;
      }
      keyIndex++;
    } else {
      if (arr.slice(curIndex, curIndex + space).includes(addChar)) {
        arr.splice(arr.indexOf(addChar, curIndex), 0, addChar);
        curIndex = arr.indexOf(addChar, curIndex) + 2;
      }
    }
  }
  return arr.join('');
}

console.log(solution('encrypt this sentence', 'something', [0, 1, 3, 2, 9, 2, 0, 3, 0, 2, 4, 1, 3]));
// "seoncrmypett thihisng ssenteonmcee"

console.log(solution('abcde fghi', 'axyz', [3, 9, 0, 1]));
// "aabcde fghixy"
