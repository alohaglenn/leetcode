// Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
// Solve it without division and in O(n).
// For example, given [1,2,3,4], return [24,12,8,6].

/**
 * @param {number[]} nums
 * @return {number[]}
 */

const productExceptSelf = nums => {
  return nums.map((_, i) => {
    return nums
      .filter(num => {
        return num !== nums[i];
      })
      .reduce((prev, curr) => {
        return prev * curr;
      });
  });
};
