"use script";

// problems 1.

// var nums = [3, 2, 4];
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

// let x = 10;

// var isPalindrome = function (x) {
//   arr1 = x.toString();
//   arr2 = [];
//   for (let i = arr1.length - 1; i >= 0; i--) {
//     arr2.push(arr1[i]);
//   }

//   if (Number(arr1) === Number(arr2.join(""))) return true;
//   else return false;
// };

// console.log(isPalindrome(x));

// --------------------------------------------------------

// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// let s = V;

// let I = 1;
// let V = 5;
// let X = 10;
// let L = 50;
// let C = 100;
// let D = 500;
// let M = 1000;

// var romanTolet = function (s) {
//   switch (s) {
//     case I:
//       return 1;
//   }
// };

// --------------------------------------------------------

// let strs = ["flower", "flow", "flight"];

// var longestCommonPrefix = function (strs) {
//   for(let i=0; i<strs.length; i++){

//   }
//   return strs;
// };

// console.log(longestCommonPrefix(strs));

// let list1 = [1, 2, 4];

// let list2 = [1, 3, 4];

// var mergeTwoLists = function (list1, list2) {
//   let a = [...list1, ...list2];
//   return a.sort();
// };

// console.log(mergeTwoLists(list1, list2));

// ///////////////////////////////////////////////////

// let l1 = [9, 9, 9, 9, 9, 9, 9];
// let l2 = [9, 9, 9, 9];

// let l1 = [2, 4, 3];
// let l2 = [5, 6, 4];

// let l1 = [0];
// let l2 = [0];

// var addTwoNumbers = function (l1, l2) {
//   let l1Reverce = "";
//   let l2Reverce = "";
//   let arr = [];
//   let sum = "";
//   for (let i = l1.length - 1; i >= 0; i--) {
//     l1Reverce += l1[i];
//   }
//   for (let i = l2.length - 1; i >= 0; i--) {
//     l2Reverce += l2[i];
//   }

//   sum = (Number(l1Reverce) + Number(l2Reverce)).toString();

//   for (let i = sum.length - 1; i >= 0; i--) {
//     arr.push(Number(sum[i]));
//   }

//   return arr;
// };

// console.log(addTwoNumbers(l1, l2));

// var addTwoNumbers = function (l1, l2) {
// var l1Reverce = "";
// var l2Reverce = "";
// var arr = [];
// var sum = "";
// for (var i = l1.length - 1; i >= 0; i--) {
//   l1Reverce += l1[i];
// }
// for (var i = l2.length - 1; i >= 0; i--) {
//   l2Reverce += l2[i];
// }

// sum = (Number(l1Reverce) + Number(l2Reverce)).toString();

// for (var i = sum.length - 1; i >= 0; i--) {
//   arr.push(Number(sum[i]));
// }

// return arr;
// };

// var addTwoNumbers = function (l1, l2) {
//   var reverseArrToString = function (arr) {
//     var str = "";
//     for (var i = arr.length - 1; i >= 0; i--) {
//       str += arr[i];
//     }
//     return str;
//   };

//   var reverseStringToArr = function (str) {
//     var arr1 = [];
//     for (var j = str.length - 1; j >= 0; j--) {
//       arr1.push(Number(str[j]));
//     }
//     return arr1;
//   };
//   var v = Number(reverseArrToString(l1)) + Number(reverseArrToString(l2));

//   return reverseStringToArr(String(v));
// };

// console.log(addTwoNumbers(l1, l2));

// let s = "()[]";
// let a = "][)(";

// var isValid = function (s) {
//   console.log;
// };

// isValid(s);

// ////////////////////////////////////////////////////////////////////////

// height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// var maxAr = function (height) {
//   let maxNum = height[0];

//   for (let i = 0; i < height.length; i++) {
//     if (maxNum < height[i]) {
//       maxNum = height[i];
//     }
//   }

//   return maxNum;
// };

// var minAr = function (height) {
//   let minNum = height[0];

//   for (let i = 0; i < height.length; i++) {
//     if (minNum > height[i]) {
//       minNum = height[i];
//     }
//   }

//   return minNum;
// };

// console.log(maxAr(height), minAr(height));

// var maxArea = function (height) {
//   let m = height.length;
//   console.log(m);
// };

// maxArea(height);

// ////////////////////////////////////////////////////////////////////////

// height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// var maxArea = function (height) {
//   let mArea = 0;
//   let width = 0;
//   for (let left = 0; left < height.length; left++) {
//     for (let right = left + 1; right < height.length; right++) {
//       width = right - left;
//       mArea = Math.max(mArea, Math.min(height[left], height[right]) * width);
//     }
//   }

//   return mArea;
// };

// console.log(maxArea(height));

// Container With Most Water

// let maxArea = function (height) {
//   let maxarea = 0;
//   let left = 0;
//   let right = height.length - 1;
//   while (left < right) {
//     let width = right - left;
//     maxarea = Math.max(maxarea, Math.min(height[left], height[right]) * width);
//     if (height[left] <= height[right]) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return maxarea;
// };

// console.log(maxArea(height));

// ////////////////////////////////////////////////////////////////////////

// var mergeTwoLists = function (list1, list2) {
//   if (!list1) return list2;
//   if (!list2) return list1;

//   let min, max;

//   if (list2.val > list1.val) {
//     min = list1;
//     max = list2;
//   } else {
//     min = list2;
//     max = list1;
//   }

//   min.next = mergeTwoLists(min.next, max);

//   return min;
// };

// ////////////////////////////////////////////////////////////////////////

// nums = [1, 3, 5, 0, 6];
// target = 8;

// let sortMethod = (arr) => {
//   console.log(arr.sort());
// };

// var searchInsert = function (nums, target) {
//   for (let i = 0; i < 2; i++) {
//     if (nums.includes(target)) {
//       return nums.sort().indexOf(target);
//     } else {
//       nums.push(target);
//     }
//   }
// };

// console.log(searchInsert(nums, target));
// ////////////////////////////////////////////////////////////////////////

// sortMethod(nums);

// nums = [1, 2, 3];
// var permute = function (nums, index = 0, permutation = [], result = []) {
//   if (index === nums.length) {
//     result.push(permutation.slice());
//   }

//   for (let i = index; i < nums.length; i++) {
//     permutation.push(nums[i]);

//     const choices = nums.filter((nums, index) => index != i);

//     permute(choices, index, permutation, result);

//     permutation.pop();
//   }

//   return result;
// };

// console.log(permute(nums));

// ////////////////////////////////////////////////////////////////////////

// nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// var maxSubArray = function (nums) {
//   let sum = 0;
//   let max = -Infinity;

//   for (let num of nums) {
//     sum += num;
//     console.log(sum);
//     if (sum > max) max = sum;
//     if (sum < 0) sum = 0;
//   }

//   return max;
// };

// console.log(maxSubArray(nums));

// ////////////////////////////////////////////////////////////////////////

s = "   fly me   to   the moon  ";

var lengthOfLastWord = function (s, l = 0) {
  for (let n of s.split(" ")) {
    if (n) l = n.length;
  }
  return l;
};

console.log(lengthOfLastWord(s));

// ////////////////////////////////////////////////////////////////////////

// Input: matrix = [
//   [5, 1, 9, 11],
//   [2, 4, 8, 10],
//   [13, 3, 6, 7],
//   [15, 14, 12, 16],
// ];
// Output: [
//   [15, 13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7, 10, 11],
// ];

// var rotate = function (matrix) {
//   let newMat = [];
//   let newArr2 = [];
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       newMat.push(matrix[i][j]);
//     }
//   }
//   return newMat;
// };

// console.log(rotate(matrix));
