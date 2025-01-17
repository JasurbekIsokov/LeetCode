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
