// 14.11.2022

// ----------------------------------------------------------------------
// 27. Remove Element
// let nums = [3, 2, 2, 3];
// let val = 3;

// var removeElement = function (nums, val) {
//   let j = 0;
//   let i = 0;
//   while (i < nums.length) {
//     if (nums[i] !== val) {
//       nums[j++] = nums[i];
//     }
//     i++;
//   }
//   return j;
// };

// console.log(removeElement(nums, val));

//  /27. Remove Element

// ----------------------------------------------------------------------

// 26. Remove Duplicates from Sorted Array

let nums = [1, 1, 2];

var removeDuplicates = function (nums) {
  let end = nums.length;
  let remove = function (i) {
    for (var j = i; j + 1 < end; j++) {
      nums[j] = nums[j + 1];
    }
  };

  var i;
  for (i = 0; i < end; i++) {
    while (i < end && nums.indexOf(nums[i]) < i) {
      remove(i);
      end--;
    }
  }

  return end;
};
console.log(removeDuplicates(nums));

// /26. Remove Duplicates from Sorted Array

// ----------------------------------------------------------------------
