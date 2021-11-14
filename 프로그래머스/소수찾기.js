function isPrime(num) {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function solution(numbers) {
  var answer = new Set();
  let nums = numbers.split("");
  const permutation = (arr, cur) => {
    if (arr.length >= 1) {
      for (let i = 0; i < arr.length; i++) {
        const newcur = cur + arr[i];
        const arr_next = arr.slice();
        arr_next.splice(i, 1);
        if (!answer.has(parseInt(newcur)) && isPrime(parseInt(newcur))) {
          answer.add(parseInt(newcur));
        }

        permutation(arr_next, newcur);
      }
    }
  };

  permutation(nums, "");

  return answer.size;
}
