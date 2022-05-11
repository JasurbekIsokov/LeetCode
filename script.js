"use script";

let nums = [3, 2, 4];
// 9
// [3,2,4]
// 6
// [3,3]
// 6];
let target = 6;

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum(nums, target));
