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

// let nums = [1, 1, 2];

// var removeDuplicates = function (nums) {
//   let end = nums.length;
//   let remove = function (i) {
//     for (var j = i; j + 1 < end; j++) {
//       nums[j] = nums[j + 1];
//     }
//   };

//   var i;
//   for (i = 0; i < end; i++) {
//     while (i < end && nums.indexOf(nums[i]) < i) {
//       remove(i);
//       end--;
//     }
//   }

//   return end;
// };
// console.log(removeDuplicates(nums));

// /26. Remove Duplicates from Sorted Array

// ----------------------------------------------------------------------

// 88. Merge Sorted Array

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

var merge = function (nums1, m, nums2, n) {
  for (let l = m; l < m + n; l++) {
    console.log(l);
    nums1[l] = nums2[l - m];
  }

  let sortArr = nums1.sort((a, b) => a - b);

  return sortArr;
};

console.log(merge(nums1, m, nums2, n));
// ----------------------------------------------------------------------
