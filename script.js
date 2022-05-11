"use script";

// problems 1.

// let nums = [3, 2, 4];
// 9
// [3,2,4]
// 6
// [3,3]
// 6];
// let target = 6;

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target && i !== j) {
//         return [i, j];
//       }
//     }
//   }
// };

// console.log(twoSum(nums, target));

// --------------------------------------------------------

// Problems 2.

// let l1 = [9, 9, 9, 9, 9, 9, 9];
// let l2 = [9, 9, 9, 9];

// var addTwoNumbers = function (l1, l2) {
//   let arr = Number(l1.join("")) + Number(l2.join(""));
//   let arrString = arr.toString();
//   let newArr = [];
//   for (let i = arrString.length - 1; i >= 0; i--) {
//     newArr.push(Number(arrString[i]));
//   }
//   return newArr;
// };

// console.log(addTwoNumbers(l1, l2));

let x = 10;

var isPalindrome = function (x) {
  arr1 = x.toString();
  arr2 = [];
  for (let i = arr1.length - 1; i >= 0; i--) {
    arr2.push(arr1[i]);
  }

  if (Number(arr1) === Number(arr2.join(""))) return true;
  else return false;
};

console.log(isPalindrome(x));

// --------------------------------------------------------
