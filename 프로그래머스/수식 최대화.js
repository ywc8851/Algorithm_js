const solution = (expression) => {
    const arr = [
      ["+", "-", "*"],
      ["+", "*", "-"],
      ["-", "+", "*"],
      ["-", "*", "+"],
      ["*", "+", "-"],
      ["*", "-", "+"],
    ];
  
    let num = expression.split(/[^0-9]/);
    num = num.map((it) => {
      return parseInt(it);
    });
    const sign = [];
    for (let i = 0; i < expression.length; i++) {
      if (
        expression[i] === "*" ||
        expression[i] === "+" ||
        expression[i] === "-"
      ) {
        sign.push(expression[i]);
      }
    }
  
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
      const copyNum = num.slice();
      const copySign = sign.slice();
      for (let j = 0; j < arr[i].length; j++) {
        for (let k = 0; k < copySign.length; k++) {
          if (copySign[k] === arr[i][j]) {
            if (copySign[k] === "*") {
              copyNum[k] *= copyNum[k + 1];
              copyNum.splice(k + 1, 1);
              copySign.splice(k, 1);
            } else if (copySign[k] === "+") {
              copyNum[k] += copyNum[k + 1];
              copyNum.splice(k + 1, 1);
              copySign.splice(k, 1);
            } else {
              copyNum[k] -= copyNum[k + 1];
              copyNum.splice(k + 1, 1);
              copySign.splice(k, 1);
            }
            k--;
          }
        }
      }
      
      if (Math.abs(copyNum[0]) >= ans) {
        ans = Math.abs(copyNum[0]);
      }
    }
    return ans;
  };
