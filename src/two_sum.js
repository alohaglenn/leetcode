// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  let numsMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(numsMap[target - nums[i]])) {
      return [numsMap[target - nums[i]], i];
    }
    numsMap[nums[i]] = i;
  }

  return [];
};
