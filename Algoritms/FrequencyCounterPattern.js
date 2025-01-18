"use script";

// Frequency Counter Pattern

// Frequency Counter Pattern algoritmlarda massivlar yoki stringlar ustida
// elementlar chastotasini (qanchalik ko'p paydo bo'lishini) samarali aniqlash uchun ishlatiladi.
// Ko'p holatlarda bu yondashuv **nested loops (ichma-ich sikl)**ni ishlatmasdan, kodni samaraliroq qilish imkonini beradi.

//242. Valid Anagram

// let isAnagram = function (s, t) {
//   return s.split("").sort().join("") === t.split("").sort().join("");
// };

// let s = "anagrama";
// let t = "nagaram";

// let isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;

//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};

//   for (let val of s) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//   }

//   for (let val of t) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//   }

//   for (let key in frequencyCounter1) {
//     if (!(key in frequencyCounter2)) {
//       return false;
//     }

//     if (frequencyCounter1[key] !== frequencyCounter2[key]) {
//       return false;
//     }
//   }

//   return true;

// };

// console.log(isAnagram(s, t));

// 387

// let s = "leetcode";

// const firstUniqChar = function (s) {
//   let frequencyCounter = {};

//   for (let val of s) {
//     frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
//   }

//   for (let i = 0; i < s.length; i++) {
//     if (frequencyCounter[s[i]] === 1) {
//       return i;
//     }
//   }

//   return -1;
// };

// console.log(firstUniqChar(s));

// 347

// let nums = [1, 1, 1, 2, 2, 3, 3, 3, 3];
// let k = 2;

// const topKFrequent = function (nums, k) {
//   let frequencyCounter = {};

//   for (let val of nums) {
//     frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
//   }

//   let sorted = Object.entries(frequencyCounter).sort((a, b) => b[1] - a[1]);

//   let result = sorted.slice(0, k).map((item) => Number(item[0]));

//   return result;
// };

// console.log(topKFrequent(nums, k));
// ------------------------------

// 242

// let s = "anagram";
// let t = "nagaram";

// const isAnagram = function (s, t) {
//   // return s.split("").sort().join("") === t.split("").sort().join("");

//   if (s.length !== t.length) {
//     return false;
//   }

//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};

//   for (let val of s) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//   }

//   for (let val of t) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//   }

//   for (let key in frequencyCounter1) {
//     if (!(key in frequencyCounter2)) {
//       return false;
//     }
//   }

//   for (let key in frequencyCounter1) {
//     if (frequencyCounter1[key] !== frequencyCounter2[key]) {
//       return false;
//     }
//   }

//   return true;
// };

// console.log(isAnagram(s, t));

// 350

// let nums1 = [4, 9, 5, 4];
// let nums2 = [9, 4, 9, 8, 4];

// let intersect = function (nums1, nums2) {
//   let newArr = [];

//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};

//   for (let val of nums1) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//   }

//   for (let val of nums2) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//   }

//   console.log(frequencyCounter1, "frequencyCounter1");
//   console.log(frequencyCounter2, "frequencyCounter2");

//   for (let key in frequencyCounter1) {
//     if (key in frequencyCounter2) {
//       let count = Math.min(frequencyCounter1[key], frequencyCounter2[key]);

//       for (let i = 0; i < count; i++) {
//         newArr.push(Number(key));
//       }
//     }
//   }

//   return newArr;
// };

// console.log(intersect(nums1, nums2));

// ---------------------------------

// 448
// const nums = [1, 2, 3, 4, 6];
// const nums = [1, 1];

// let findDisappearedNumbers = function (nums) {
//   let n = nums.length; // 5
//   let result = [];

//   for (let i = 0; i < n; i++) { // 0, 1, 2, 3, 4
//     let num = Math.abs(nums[i]); // 1, 2, 3, 4, 6

//     if (nums[num - 1] > 0) { // [0]:1,  [1]:2, [2]:3, [3]:4
//       nums[num - 1] = -nums[num - 1]; // nums[0]=-1, nums[1]=-2, nums[2]=-3 , nums[3]=-4,
//     }
//   }

//   console.log(nums);

//   for (let i = 0; i < n; i++) {
//     if (nums[i] > 0) {
//       result.push(i + 1);
//     }
//   }

//   return result;
// };

// console.log(findDisappearedNumbers(nums));

// let findDisappearedNumbers = function (nums) {
//   let frequencyCounter = {};
//   let result = [];
//   let n = nums.length;

//   for (let val of nums) {
//     frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
//   }

//   for (let i = 1; i <= n; i++) {
//     if (!frequencyCounter[i]) {
//       result.push(i);
//     }
//   }

//   return result;
// };

// console.log(findDisappearedNumbers(nums));

// ---------------------------------------------------
