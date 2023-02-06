/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const orderMap = {};
  for (let i = 0; i < order.length; i++) orderMap[order[i]] = i;

  const isValidate = (cur, prev) => {
    const len = Math.min(cur.length, prev.length);

    for (let i = 0; i < len; i++) {
      if (orderMap[cur[i]] > orderMap[prev[i]]) return true;
      if (orderMap[cur[i]] < orderMap[prev[i]]) return false;
    }

    return cur.length >= prev.length;
  };

  for (let i = 1; i < words.length; i++) {
    if (!isValidate(words[i], words[i - 1])) return false;
  }

  return true;
};
