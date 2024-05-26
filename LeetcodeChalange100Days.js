"use strict";

// 2635. Apply Transform Over Each Element in Array

// var map = function (arr, fn) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = fn(arr[i], i);
//   }

//   return arr;
// };

// 2634. Filter Elements from Array

// var filter = function (arr, fn) {
//   let filteredArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i], i)) {
//       filteredArr.push(arr[i]);
//     }
//   }

//   return filteredArr;
// };

// 27. Remove Element

// function removeElement(nums, val) {
//   let j = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[j] = nums[i];
//       j++;
//     }
//   }

//   return j;
// }

// console.log(removeElement([3, 2, 2, 3], 3));

// 26. Remove Duplicates from Sorted Array

function removeDuplicates(nums) {
  let j = nums[0];
  let k = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== j) {
      nums[k] = nums[i];
      j = nums[k];
      k++;
    }

    console.log(nums);
  }

  return k;
}

console.log(removeDuplicates([1, 1, 2]));
