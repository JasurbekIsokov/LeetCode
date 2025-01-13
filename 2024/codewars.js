// Codewars issue

// -----------------------------------------------------------------------------

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// let str = "1 8 3 -5 42 -1 0 0 -9 4 7 4 -4";

// function highAndLow(numbers) {
// // string split in array
// let strCopyArr = numbers.split(" ");

// // min number and max number
// let minNum = Number(strCopyArr[0]);
// let maxNum = Number(strCopyArr[0]);
// for (let i = 0; i < strCopyArr.length; i++) {
//   if (minNum > Number(strCopyArr[i])) {
//     minNum = Number(strCopyArr[i]);
//   }
//   if (maxNum < Number(strCopyArr[i])) {
//     maxNum = Number(strCopyArr[i]);
//   }
// }

// return `${maxNum} ${minNum}`;
// }

// console.log(highAndLow(str));

// -----------------------------------------------------------------------------

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// let n = 493193;

// function digitalRoot(n) {
//   let str = String(n);
//   let sum = 0;
//   for (let i = 0; i < str.length; i++) {
//     sum += Number(str[i]);
//   }

//   if (String(sum).length === 1) {
//     return sum;
//   }

//   str = String(sum);
//   let i = 0;
//   while (str.length > 1) {
//     sum = 0;
//     for (let i = 0; i < str.length; i++) {
//       sum += Number(str[i]);
//     }
//     str = String(sum);
//     i++;
//   }

//   return sum;
// }

// console.log(digitalRoot(n));
