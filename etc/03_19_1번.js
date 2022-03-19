function solution(goods) {
  let ans = [];
  for (let i = 0; i < goods.length; i++) {
    const curStr = goods[i];
    let curAns = new Set();
    for (let j = 1; j <= curStr.length; j++) {
      let index = 0;
      while (index + j <= curStr.length) {
        let possible = true;
        const partStr = curStr.slice(index, index + j);
        for (let k = 0; k < goods.length; k++) {
          if (i === k) continue;

          if (goods[k].includes(partStr)) {
            possible = false;
            break;
          }
        }
        if (possible) {
          curAns.add(partStr);
        }
        index += 1;
      }

      if (curAns.size !== 0) {
        const arr = Array.from(curAns);
        ans.push(arr.sort().join(' '));
        break;
      }
    }
    if (curAns.size === 0) {
      ans.push('None');
    }
  }
  return ans;
}

// console.log(solution(['pencil', 'cilicon', 'contrabase', 'picturelist']));
// ["en nc pe","ico ili lic","a b","u"]

console.log(solution(['abcdeabcd', 'cdabe', 'abce', 'bcdeab']));
// // ["abcdeabcd","cdabe","abce","bcdeab"]
