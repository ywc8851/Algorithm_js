function solution(n, k) {
  let ans = 0;
  const arr = n.toString(k).split("0").map(Number);

  const isPrime = (num) => {
    if (num === 1) return false;
    if (num === 2) return true;

    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) return false;
    }

    return true;
  };

  if (arr.length === 1) {
    if (isPrime(arr[0])) return 1;
    else return 0;
  } else {
    arr.forEach((num) => {
      if (num !== 0 && isPrime(num)) ans += 1;
    });
    return ans;
  }
}
