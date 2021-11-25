function uglyNumber(n) {
  let p2 = 1;
  let p3 = 1;
  let p5 = 1;
  let arr = new Array(n + 1);

  let min;
  arr[1] = 1;
  for (let i = 2; i <= n; i++) {
    min = Math.min(arr[p2] * 2, arr[p3] * 3, arr[p5] * 5);
    if (min === arr[p2] * 2) p2++;
    if (min === arr[p3] * 3) p3++;
    if (min === arr[p5] * 5) p5++;
    arr[i] = min;
  }
  return arr[n];
}
