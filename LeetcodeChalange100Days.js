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

// function removeDuplicates(nums) {
//   let j = nums[0];
//   let k = 1;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== j) {
//       nums[k] = nums[i];
//       j = nums[k];
//       k++;
//     }

//     console.log(nums);
//   }

//   return k;
// }

// console.log(removeDuplicates([1, 1, 2]));

// 80. Remove Duplicates from Sorted Array II

// function removeDuplicates(nums) {
//   let count = 1;
//   let j = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i - 1]) {
//       count++;
//     } else {
//       count = 1;
//     }

//     if (count <= 2) {
//       nums[j] = nums[i];
//       j++;
//     }
//   }

//   console.log(nums);

//   return j;
// }

// console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));

// 169. Majority Element

function majorityElement(nums) {
  let countObj = {};

  for (let i = 0; i < nums.length; i++) {
    if (countObj[nums[i]]) {
      countObj[nums[i]] = countObj[nums[i]] + 1;
    } else {
      countObj[nums[i]] = 1;
    }
  }

  let max = Object.keys(countObj)[0];

  for (const key in countObj) {
    if (countObj[max] < countObj[key]) {
      max = key;
    }
  }

  return Number(max);
}

console.log(majorityElement([3, 3, 4]));
