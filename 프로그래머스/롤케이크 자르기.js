function solution(topping) {
  let ans = 0;

  const allTopping = new Map();
  topping.forEach((item) =>
    allTopping.set(item, (allTopping.get(item) || 0) + 1)
  );

  const curTopping = new Map();
  topping.forEach((item) => {
    curTopping.set(item, (curTopping.get(item) || 0) + 1);
    allTopping.get(item) === 1
      ? allTopping.delete(item)
      : allTopping.set(item, allTopping.get(item) - 1);

    if (allTopping.size === curTopping.size) ans++;
  });

  return ans;
}
