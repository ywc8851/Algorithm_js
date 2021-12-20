const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt'
let input = fs.readFileSync(filePath).toString().trim().split("\n")[0]

const findPinaryNumber = len => {
  const pinaryArr = new Array(len).fill(1n)
  for (let i = 2; i < len; i++) pinaryArr[i] = pinaryArr[i - 1] + pinaryArr[i - 2]
  return (pinaryArr[len - 1] + '')
}
console.log(findPinaryNumber(+input))
