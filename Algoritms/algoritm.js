"use script";

//Timing Our Code: console.time && console.timeEnd

// console.time("My Code");

// let sum = 0;
// for (let i = 0; i < 10_000_000; i++) {
//   sum += i;
// }

// console.timeEnd("My Code");

//Timing Our Code: console.time && console.timeEnd

// function addUpToLoop(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// function addUpToFormula(n) {
//   return (n * (n + 1)) / 2;
// }

// console.time("Loop Method");
// addUpToLoop(1_000_000);
// console.timeEnd("Loop Method");

// console.time("Formula Method");
// addUpToFormula(1_000_000);
// console.timeEnd("Formula Method");
// ------------------------------------------
// Counting Operations (Amallarni hisoblash)
// Amallarni hisoblash — bu algoritm bajarilganda qancha marta asosiy operatsiyalar (masalan, qo‘shish, chiqarish, taqqoslash) bajarilishini aniqlash.

// Nima uchun bu muhim ?
// • Kodning ishlash samaradorligini tahlil qilish.
// • Algoritmlarni taqqoslashda asosi bo‘lish.
// • Katta hajmdagi ma'lumotlarni ishlov berishda samaradorlikni yaxshilash.

// 1. Oddiy Sikl
// function sumUpTo(n) {
//     let sum = 0; // 1 ta operatsiya
//     for (let i = 1; i <= n; i++) { // n ta operatsiya (taqqoslash)
//         sum += i; // n ta operatsiya (qo‘shish)
//     }
//     return sum; // 1 ta operatsiya
// }

// Umumiy amallar soni:

// • 1 (o‘zgaruvchi e'lon qilish)
// • n (tsikldagi har bir taqqoslash)
// • n (har bir qo‘shish)
// • 1 (natijani qaytarish)
// 1 + n + n + 1 = 2n + 2

// Shuning uchun bu algoritm O(n) deb hisoblanadi.

// 2. Ichki Sikl
// function printPairs(n) {
//     for (let i = 1; i <= n; i++) { // n ta operatsiya
//         for (let j = 1; j <= n; j++) { // har bir `i` uchun yana n ta operatsiya
//             console.log(i, j); // n * n operatsiya (n²)
//         }
//     }
// }

// Umumiy amallar soni:

// • Tashqi tsikl: n marta ishlaydi.
// • Ichki tsikl: Har bir tashqi iteratsiya uchun n marta ishlaydi.
// • Operatsiyalar soni: n * n = n².

// Natija: Eng katta qiymatga ega o‘sish tezligi — bu O(n²).

// 3. Amallarni hisoblash
// 1) Konstant (O(1)): Qachonki operatsiyalar soni ma'lumot hajmiga bog‘liq bo‘lmasa.
// 2) Chiziqli (O(n)): Operatsiyalar soni ma'lumotlar soniga to‘g‘ri proporsional bo‘lsa.
// 3) Kvadratik (O(n²)): Ma'lumotlar soni ko‘paygani sari operatsiyalar soni kvadratga teng bo‘lsa.
// 4) Logarifmik (O(log n)): Operatsiyalar soni logarifm bo‘yicha o‘zgarsa.
// ------------------------------------------
