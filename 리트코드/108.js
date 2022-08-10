/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const sortedArrayToBST = (nums) => {
  if (nums.length === 0) return null;
  if (nums.length === 1) return new TreeNode(nums[0]);

  const middleIndex = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[middleIndex]);
  root.left = sortedArrayToBST(nums.slice(0, middleIndex));
  root.right = sortedArrayToBST(nums.slice(middleIndex + 1, nums.length));

  return root;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
