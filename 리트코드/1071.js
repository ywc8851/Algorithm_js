/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  const isPossible = (word, str) => {
    if (str.length === 0) return true;
    if (!str.startsWith(word)) return false;

    return isPossible(word, str.slice(word.length));
  };

  let ans = "";

  for (let i = 1; i <= str1.length; i++) {
    const word = str1.slice(0, i);
    if (isPossible(word, str1) && isPossible(word, str2)) ans = word;
  }

  return ans;
};
