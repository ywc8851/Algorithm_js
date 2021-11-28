/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(nums) {
  let stack = [];
  
  for (i = 0; i < nums.length; i++) {
    let flag = true;
    if (stack.length === 0) {
      stack.push(nums[i]);
      //   console.log(stack);
    } else {
      while (stack[stack.length - 1] > 0 && nums[i] < 0) {
        if (Math.abs(stack[stack.length - 1]) === Math.abs(nums[i])) {
          // 절대값이 같은 경우 같이터짐
          stack.pop();
          //   console.log("절대값이 같은 경우");
          flag = false;
          break;
        } else if (Math.abs(stack[stack.length - 1]) > Math.abs(nums[i])) {
          // 양수의 절대값이 큰 경우
          //   console.log("양수 절대값이 큰 경우");
          flag = false;
          break;
        } else {
          // 음수의 절대값이 큰 경우
          //   console.log("음수 절대값이 큰 경우", i);
          stack.pop();
          //   stack.push(nums[i]);
          flag = true;
        }
      }
      if (flag) {
        stack.push(nums[i]);
      }
    }
    // console.log(stack, i);
  }
  return stack;
};
