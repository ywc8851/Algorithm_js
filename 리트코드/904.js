/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  const fruitMap = new Map();
  let ans = 0;
  let left = 0;

  for (let i = 0; i < fruits.length; i++) {
    fruitMap.set(fruits[i], (fruitMap.get(fruits[i]) || 0) + 1);

    if (fruitMap.size > 2) {
      if (fruitMap.get(fruits[left]) - 1 === 0) fruitMap.delete(fruits[left]);
      else fruitMap.set(fruits[left], fruitMap.get(fruits[left]) - 1);
      left++;
    }

    ans = Math.max(i - left + 1, ans);
  }

  return ans;
};
