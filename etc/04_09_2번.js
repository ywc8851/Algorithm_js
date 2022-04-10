function solution(call) {
  let ans = [];
  function characterFrequency(string) {
    let strings = string.split('');
    let count = strings.reduce(function (chars, cur, i, arr) {
      if (chars[cur]) {
        chars[cur] += 1;
      } else {
        chars[cur] = 1;
      }
      return chars;
    }, {});
    let keys = Object.keys(count);
    let sorted = keys.sort(function (l, r) {
      if (count[l] > count[r]) {
        return -1;
      } else if (count[l] < count[r]) {
        return 1;
      } else {
        if (l > r) {
          return 1;
        } else {
          return -1;
        }
      }
    });
    let result = [];
    sorted.forEach(function (k) {
      result.push([k, count[k]]);
    });
    return result;
  }
  let arr = characterFrequency(call.toLowerCase());
  let maxCnt = arr[0][1];
  let maxfreq = [arr[0][0]];
  for (let i = 1; i < arr.length; i++) {
    if (maxCnt === arr[i][1]) {
      maxfreq.push(arr[i][0]);
    } else {
      break;
    }
  }

  for (let i = 0; i < call.length; i++) {
    if (maxfreq.includes(call[i]) || maxfreq.includes(call[i].toLowerCase())) {
      continue;
    } else {
      ans.push(call[i]);
    }
  }
  return ans.join('');
}

console.log(solution('abcabcdefabc')); // def
console.log(solution('abxdeydeabz')); // xyz
console.log(solution('abcabca')); // bcbc
console.log(solution('ABCabcA')); // Bcbc
