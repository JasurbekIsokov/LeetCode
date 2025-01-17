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

// ### **Mavzu: Space Complexity (Xotira Murakkabligi)**

// **Space Complexity** algoritmning bajarilishi davomida qancha xotira sarflanishini o‘lchaydi. Bu xotira sarfi algoritmning samaradorligini tushunishda muhim mezonlardan biridir. Algoritm qancha xotira ishlatishini bilish orqali undan foydalanish samaradorligini aniqlashimiz mumkin.

// ---

// ### **1. Space Complexity nima?**

// Xotira murakkabligi algoritmning ishlashi davomida talab qilinadigan:
// - **Doimiy xotira:** Har qanday hajmda bo‘lishidan qat'i nazar doimiy ishlatiladigan xotira.
// - **O‘zgaruvchi xotira:** Input hajmiga bog‘liq bo‘lgan xotira.

// **Formula:**
// \[ \text{Space Complexity} = \text{Fixed Space} + \text{Variable Space} \]

// ---

// ### **2. Space Complexity’ga ta’sir qiluvchi omillar**

// 1. **Input hajmi (n):** Input hajmi qanchalik katta bo‘lsa, xotira sarfi shuncha oshadi.
// 2. **Ma'lumot tuzilmalari:** Massivlar, obyektlar, ro‘yxatlar kabi tuzilmalar qancha ko‘p bo‘lsa, xotira talabi shuncha ortadi.
// 3. **Funksiya chaqiruvlari:** Rekursiv funksiyalar qo‘shimcha stek xotirasini talab qiladi.

// ---

// ### **3. Space Complexity turlari**

// 1. **Doimiy xotira \( O(1) \):** Xotira hajmi inputga bog‘liq bo‘lmasa.
//    **Misol:**
//    ```javascript
//    function constantSpace(n) {
//        let result = 0; // Faqat bitta o'zgaruvchi.
//        result = n + 10;
//        return result;
//    }
//    ```
//    **Xotira murakkabligi:** \( O(1) \).

// 2. **Chiziqli xotira \( O(n) \):** Xotira hajmi input hajmiga bog‘liq.
//    **Misol:**
//    ```javascript
//    function linearSpace(array) {
//        let newArray = []; // Yangi massiv yaratamiz.
//        for (let i = 0; i < array.length; i++) {
//            newArray.push(array[i] * 2);
//        }
//        return newArray;
//    }
//    ```
//    **Xotira murakkabligi:** \( O(n) \).

// 3. **Kvadratik xotira \( O(n^2) \):** Xotira hajmi input hajmining kvadratiga bog‘liq.
//    **Misol:**
//    ```javascript
//    function quadraticSpace(array) {
//        let matrix = [];
//        for (let i = 0; i < array.length; i++) {
//            let row = [];
//            for (let j = 0; j < array.length; j++) {
//                row.push(array[i] * array[j]);
//            }
//            matrix.push(row);
//        }
//        return matrix;
//    }
//    ```
//    **Xotira murakkabligi:** \( O(n^2) \).

// 4. **Rekursiv xotira:** Har bir rekursiv chaqiruv uchun qo‘shimcha stek xotirasi talab qilinadi.
//    **Misol:**
//    ```javascript
//    function factorial(n) {
//        if (n === 1) return 1;
//        return n * factorial(n - 1);
//    }
//    ```
//    **Xotira murakkabligi:** \( O(n) \) (rekursiv stek uchun).

// ---

// ### **4. Space Complexity’ni o‘lchash**

// Xotira murakkabligini o‘lchashda quyidagilarni hisobga olish kerak:

// 1. **Input hajmiga bog‘liq ma'lumotlar tuzilmalari:** Yangi massivlar, obyektlar yoki boshqa strukturalar qancha joy talab qiladi?
// 2. **Foydalaniladigan qo‘shimcha o‘zgaruvchilar:** Algoritm davomida qancha vaqtinchalik yoki yordamchi o‘zgaruvchilar ishlatiladi?
// 3. **Rekursiv chaqiruvlar:** Har bir chaqiruv stek xotirasida qancha joy egallaydi?

// ---

// ### **5. Misollar bilan tushuntirish**

// #### **Misol 1: Massivni qayta ishlash**
// ```javascript
// function doubleElements(array) {
//     let doubledArray = []; // Yangi massiv yaratish uchun qo'shimcha xotira.
//     for (let i = 0; i < array.length; i++) {
//         doubledArray.push(array[i] * 2);
//     }
//     return doubledArray;
// }
// ```
// **Space Complexity:**
// - Input massiv hajmi: \( n \).
// - Qo‘shimcha xotira: \( O(n) \) (yangi massiv uchun).
// - **Umumiy murakkablik:** \( O(n) \).

// ---

// #### **Misol 2: Rekursiv funksiya**
// ```javascript
// function sumToN(n) {
//     if (n === 1) return 1;
//     return n + sumToN(n - 1);
// }
// ```
// **Space Complexity:**
// - Har bir chaqiruv stekda saqlanadi.
// - Rekursiya chuqurligi: \( n \).
// - **Murakkablik:** \( O(n) \).

// ---

// ### **6. Space Complexity va Time Complexity o‘rtasidagi farq**

// | **Space Complexity**               | **Time Complexity**              |
// |------------------------------------|----------------------------------|
// | Algoritm qancha xotira ishlatadi. | Algoritm qancha vaqt oladi.     |
// | Ma'lumotlar tuzilmalari xotira sarfini o‘lchaydi. | Operatsiyalar sonini o‘lchaydi. |
// | Qisqa muddatli yoki vaqtinchalik xotira iste'moli hisoblanadi. | Operatsiyalar sonining input hajmiga bog‘liqligi aniqlanadi. |

// ---

// ### **7. Maqola manbalari va tarjimalar**

// #### **Maqola 1: [What is Space Complexity?](https://www.geeksforgeeks.org/space-complexity/)**
// **Qisqacha tarjima:** Ushbu maqola xotira murakkabligini tahlil qilish va o‘lchash bo‘yicha asosiy tushunchalarni tushuntiradi.

// #### **Maqola 2: [Time and Space Complexity](https://www.programiz.com/dsa/time-and-space-complexity)**
// **Qisqacha tarjima:** Algoritmlarning vaqt va xotira murakkabligini tushunish uchun asosiy qo‘llanma.

// ---

// let typeTop = (variable) => {
//   if (variable === Infinity) {
//     return "Infinity";
//   } else if (variable === -Infinity) {
//     return "-Infinity";
//   } else if (typeof variable === undefined) {
//     return "undefined";
//   } else if (Number.isNaN(variable)) {
//     return "Nan";
//   } else if (variable === null) {
//     return "null";
//   } else if (Array.isArray(variable)) {
//     return "array";
//   } else return typeof variable;
// };

// console.log(typeTop(null));

// // Test Cases
// const testCases = [
//   { input: Infinity, expected: "Infinity" },
//   { input: -Infinity, expected: "-Infinity" },
//   { input: NaN, expected: "Nan" },
//   { input: null, expected: "null" },
//   { input: undefined, expected: "undefined" },
//   { input: [1, 2, 3], expected: "array" },
//   { input: [], expected: "array" },
//   { input: "hello", expected: "string" },
//   { input: 42, expected: "number" },
//   { input: true, expected: "boolean" },
//   { input: false, expected: "boolean" },
//   { input: () => {}, expected: "function" },
//   { input: function test() {}, expected: "function" },
//   { input: {}, expected: "object" },
//   { input: new Date(), expected: "object" }, // Note: Dates are objects in this function
//   { input: new Map(), expected: "object" },
//   { input: new Set(), expected: "object" },
//   { input: /regex/, expected: "object" },
//   { input: Symbol("test"), expected: "symbol" },
//   { input: BigInt(123), expected: "bigint" },
// ];

// // Test Runner
// testCases.forEach(({ input, expected }, index) => {
//   const actual = typeTop(input);
//   console.log(
//     `Test ${index + 1}:`,
//     actual === expected
//       ? "✅ Passed"
//       : `❌ Failed (Expected: ${expected}, Got: ${actual})`
//   );
// });
