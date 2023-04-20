function solution(users, emoticons) {
  const getPermutations = (arr, num) => {
    const result = [];
    if (num === 1) return arr.map((v) => [v]);

    arr.forEach((fixed, _, origin) => {
      const permutations = getPermutations(origin, num - 1);
      const attached = permutations.map((v) => [fixed, ...v]);
      result.push(...attached);
    });

    return result;
  };

  const dc = [10, 20, 30, 40];
  const dcArr = getPermutations(dc, emoticons.length);

  let emoticonPlusAns = 0;
  let totalSellMoneyAns = 0;

  for (let i = 0; i < dcArr.length; i++) {
    let emoticonPlus = 0;
    let totalSellMoney = 0;

    for (let j = 0; j < users.length; j++) {
      const [dcBorder, moneyBorder] = users[j];
      let totalBuyMoney = 0;

      for (let k = 0; k < emoticons.length; k++) {
        if (dcBorder <= dcArr[i][k]) {
          totalBuyMoney += emoticons[k] * ((100 - dcArr[i][k]) / 100);
        }
      }
      if (totalBuyMoney >= moneyBorder) emoticonPlus++;
      else totalSellMoney += totalBuyMoney;
    }
    if (emoticonPlusAns < emoticonPlus) {
      emoticonPlusAns = emoticonPlus;
      totalSellMoneyAns = totalSellMoney;
    }

    if (emoticonPlusAns === emoticonPlus) {
      totalSellMoneyAns = Math.max(totalSellMoney, totalSellMoneyAns);
    }
  }

  return [emoticonPlusAns, totalSellMoneyAns];
}
