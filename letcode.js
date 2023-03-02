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

// let nums1 = [1, 2, 3, 0, 0, 0];
// let m = 3;
// let nums2 = [2, 5, 6];
// let n = 3;

// var merge = function (nums1, m, nums2, n) {
//   for (let l = m; l < m + n; l++) {
//     console.log(l);
//     nums1[l] = nums2[l - m];
//   }

//   let sortArr = nums1.sort((a, b) => a - b);

//   return sortArr;
// };

// console.log(merge(nums1, m, nums2, n));
// ----------------------------------------------------------------------
// 121. Best Time to Buy and Sell Stock

// let prices = [7, 1, 5, 3, 6, 4];

// let prices = [7, 6, 4, 3, 1];

// ----------------------------------------------------------------------

// 217. Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// let nums = [2, 14, 18, 22, 22];

// var containsDuplicate = function (nums) {
//   let sortArr = nums.sort((a, b) => a - b);
//   let test = false;

//   for (let i = 0; i < sortArr.length; i++) {
//     if (sortArr[i] === sortArr[i + 1]) {
//       test = true;
//     }
//   }

//   return test;
// };

// console.log(containsDuplicate(nums));

// ----------------------------------------------------------------------

// 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// let s = "anagram";
// let t = "nagaraam";

// var isAnagram = function (s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }

//   let sArr = s.split("");
//   let tArr = t.split("");

//   for (let i = 0; i < sArr.length; i++) {
//     if (tArr.indexOf(sArr[i]) >= 0) tArr.splice(tArr.indexOf(sArr[i]), 1);
//   }

//   return tArr.length === 0;
// };

// console.log(isAnagram(s, t));

// ----------------------------------------------------------------------

// 1299. Replace Elements with Greatest Element on Right Side

// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

// let arr = [17, 18, 5, 4, 6, 1];

// var replaceElements = function (arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let max = -1;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] > max) max = arr[j];
//     }
//     newArr.push(max);
//   }
//   return newArr;
// };

// console.log(replaceElements(arr));

// ----------------------------------------------------------------------

// 392. Is Subsequence

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// let s = "abc";
// let t = "bhagdc";

// const isSubsequence = (s, t) => {
//   //! Edge case
//   if (s.length > t.length) return false; //! if len of s is greater than len of t, return false because s cant be a subsequence of t

//   const t_length = t.length;
//   let subsequence = 0;
//   for (let i = 0; i < t_length; i++) {
//     if (s[subsequence] === t[i]) {
//       // ! if it is matching, increment subsequence
//       subsequence++;
//     }
//   }
//   return subsequence === s.length;
// };

// console.log(isSubsequence(s, t));

// ----------------------------------------------------------------------

// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// let nums = [3, 3];
// let target = 6;

// var twoSum = function (nums, target) {
//   let arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) arr.push(i, j);
//     }
//   }

//   return arr;
// };

// console.log(twoSum(nums, target));

// ----------------------------------------------------------------------

// 118. Pascal's Triangle

// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// let numRows = 5;

// var generate = function (numRows) {
//   let pascal = [];

//   for (let i = 0; i < numRows; i++) {
//     pascal[i] = [];
//     pascal[i][0] = 1;

//     for (let j = 1; j < i; j++) {
//       pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
//     }
//     pascal[i][i] = 1;
//   }

//   return pascal;
// };

// console.log(generate(numRows));

// ----------------------------------------------------------------------

// 859. Buddy Strings

// Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

// For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// let s = "aaaaaaabc";
// let goal = "aaaaaaacb";

// var buddyStrings = function (s, goal) {
//   const hashmap = {};
//   let indexOfFirstWrong;
//   let output = false;
//   let hasDuplicate = false;
//   let numberOfWrongCharacter = 0;

//   for (let i = 0; i < goal.length; i++) {
//     if (goal[i] !== s[i] && indexOfFirstWrong === undefined) {
//       indexOfFirstWrong = i;
//       numberOfWrongCharacter++;
//     } else if (goal[i] !== s[i] && indexOfFirstWrong !== undefined) {
//       output =
//         goal[i] === s[indexOfFirstWrong] && goal[indexOfFirstWrong] === s[i];
//       numberOfWrongCharacter++;
//       if (numberOfWrongCharacter > 2) return false;
//     }

//     if (hashmap[s[i]]) hasDuplicate = true;

//     hashmap[s[i]] = 1;
//   }

//   if (!numberOfWrongCharacter && hasDuplicate) return true;

//   return output;
// };

// console.log(buddyStrings(s, goal));

// ----------------------------------------------------------------------

// 290. Word Pattern

// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

let pattern = "abba";
let s = "dog cat cat dog";

function wordPattern(pattern, s) {
  const words = s.split(" ");
  if (pattern.length !== words.length) {
    return false;
  }

  const map = new Map();
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    if (map.has(char)) {
      if (map.get(char) !== word) {
        return false;
      }
    } else {
      if ([...map.values()].includes(word)) {
        return false;
      }
      map.set(char, word);
    }
  }

  return true;
}

console.log(wordPattern(pattern, s));
