// 14.11.2022

// ----------------------------------------------------------------------
// 27. Remove Element
let nums = [3, 2, 2, 3];
let val = 3;

var removeElement = function (nums, val) {
  let j = 0;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] !== val) {
      nums[j++] = nums[i];
    }
    i++;
  }
  return j;
};

console.log(removeElement(nums, val));
// removeElement(nums);

//  /27. Remove Element
// ----------------------------------------------------------------------
