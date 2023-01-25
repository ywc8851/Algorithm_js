/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const findSubsequences = (nums) => {
  const ans = [];
  const visited = {};

  const dfs = (idx, tmpArr) => {
    if (visited[tmpArr]) return;
    if (tmpArr.length > 1) {
      ans.push(tmpArr);
    }

    for (let i = idx; i < nums.length; i++) {
      if (nums[i] < tmpArr[tmpArr.length - 1]) continue;

      visited[tmpArr] = true;
      dfs(i + 1, [...tmpArr, nums[i]]);
    }
  };

  dfs(0, []);
  return ans;
};

console.log(findSubsequences([4, 6, 7, 7]));
