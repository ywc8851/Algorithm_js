/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function (words) {
  const set = new Set(words);
  const ans = [];

  const dfs = (word, n) => {
    if (n >= 2 && word.length === 0) return true;

    for (let i = 1; i <= word.length; i++) {
      const curString = word.slice(0, i);
      if (set.has(curString)) {
        if ((dfs(word.slice(i)), n + 1)) return true;
      }
    }
    return false;
  };

  for (let word of words) {
    if (dfs(word, 0)) ans.push(word);
  }
  return ans;
};
