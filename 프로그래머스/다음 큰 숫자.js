function solution(n) {
  const cnt = n.toString(2).split("1").length;
  while (n++) {
    if (n.toString(2).split("1").length === cnt) return n;
  }
}
